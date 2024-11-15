import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ query: string | undefined }>
}>) {

  const { query } = await searchParams
  const params = { search: query ?? null }

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  const session = await auth()

  console.log(session?.id);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competitions.</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for: ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found!</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
