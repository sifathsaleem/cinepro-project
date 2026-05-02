import { useEffect, useState } from "react";
import { options } from "../utils/Options";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchmovies() {
      setLoading(true)
      const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`, options);

      const data = await response.json();

      setData(data);
      setLoading(false);
    }
    fetchmovies();
  }, [apiPath, queryTerm]);

  return { data, loading };
};

export default useFetch;
