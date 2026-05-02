import { useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Skeleton from "../components/CardSkeleton";

const MovieList = ({ apiPath, title }) => {
  const { data, loading } = useFetch(apiPath);
  useTitle(title);

  const movies = data?.results || [];
  const dummy = new Array(6).fill(0);

  return (
    <main className="grid gap-5 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
      {loading ? dummy.map((_, i) => <Skeleton key={i} />) : movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </main>
  );
};

export default MovieList;
