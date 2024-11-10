import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ query: string | undefined }>
}>) {

  const { query } = await searchParams

  const posts = [
    {
      _id: 1,
      title: 'We Robots',
      description: 'This is a description',
      category: 'Robots',
      author: {
        _id: 1,
        name: 'Khalid'
      },
      views: 55,
      _createdAt: new Date(),
      image: 'https://images.unsplash.com/photo-1581878611345-3fe425a0f833?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

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
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
