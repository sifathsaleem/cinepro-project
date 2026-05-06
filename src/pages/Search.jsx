import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Skeleton from "../components/CardSkeleton";

const Search = ({ apiPath, title }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data, loading } = useFetch(apiPath, queryTerm);
  useTitle(`${title} ${queryTerm}`);

  const movies = data?.results || [];
  const dummy = new Array(6).fill(0);

  return (
    <main>
      <section>
        <p className="text-3xl text-black dark:text-slate-100 mb-5">{loading || movies.length > 0 ? `Results For (${queryTerm})` : `No results Found For (${queryTerm})`}</p>
      </section>
      <section>
        <div className="grid gap-5 justify-center sm:grid-cols-2 lg:grid-cols-3">{loading ? dummy.map((_, i) => <Skeleton key={i} />) : movies.map((movie) => <Card key={movie.id} movie={movie} />)}</div>
      </section>
    </main>
  );
};

export default Search;
