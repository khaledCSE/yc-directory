import { client } from "@/sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries"
import { writeClient } from "@/sanity/lib/write-client"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    signIn: async ({ user: { image, name, email }, profile }) => {
      const existingUser = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id })

      if (!existingUser) {
        await writeClient.create({
          _type: 'author',
          id: profile?.id,
          name: name,
          username: profile?.login,
          email: email,
          image: image,
          bio: profile?.bio ?? '',
        })
      }

      return true;
    },
    jwt: async ({ account, token, profile }) => {
      if (account && profile) {
        // * Get the user from sanity
        const user = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id })

        token.id = user._id

      }
      return token;
    },
    session: async ({ session, token }) => {
      Object.assign(session, { id: token.id })
      return session;
    }
  }
})