import SearchForm from "@/components/SearchForm";

interface SearchParams {
  query?: string
}

export default async function Home(searchParams: Promise<SearchParams>) {
  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, connect with entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competitions.</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
