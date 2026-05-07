import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import posterBackup from "../assets/poster_backup.jpg";
import useTitle from "../hooks/useTitle";
import { useEffect, useState } from "react";
import DetailsSkeleton from "../components/DetailsSkeleton";
import { FaStar, FaPlay, FaArrowLeft } from "react-icons/fa";

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const id = useParams().id;
  const navigate = useNavigate();
  const { data, loading } = useFetch(`movie/${id}`);
  console.log(data);
  const { original_title, backdrop_path, poster_path, overview, release_date, genres, vote_average, vote_count, runtime } = data;
  useTitle(original_title);

  const backdropImg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const posterImg = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBackup;
  const year = release_date ? release_date.split("-")[0] : null;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const displayedGenres = genres
    ?.slice(0, 2)
    .map((genre) => genre.name)
    .join(", ");
  const moreCount = genres?.length - 2;

  return (
    <main className="flex">
      {loading ? (
        <DetailsSkeleton />
      ) : (
        <div className="flex flex-col md:flex-row md:gap-x-5 w-full overflow-hidden mx-auto max-w-lg md:max-w-none rounded-xl h-[80vh] items-center text-white relative">
          <img src={backdropImg} alt="" className="absolute hidden md:inline-block inset-0 w-full h-full md:blur" />
          <div className="bg-black/50 absolute hidden md:block inset-0"></div>
          <div className="w-full h-[50%] md:h-full md:flex-1 overflow-hidden flex relative">
            <img src={posterImg} alt="" className="w-full object-top object-cover" />
            <button onClick={() => navigate(-1)} className="absolute bg-gray-500/50 backdrop-blur-sm p-3 rounded-full top-5 left-5">
              <FaArrowLeft />
            </button>
          </div>

          <div className="bg-neutral-100 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent md:z-10 flex-1 md:flex-2 text-slate-800 md:text-slate-100 dark:text-slate-100 flex flex-col p-4">
            <span className="block text-3xl md:text-5xl font-bold mb-3 md:mb-5">{original_title}</span>

            <div className="flex gap-y-2 flex-col md:flex-row text-sm md:text-base justify-center md:justify-start font-light mb-5">
              {vote_average && (
                <div className="flex items-center me-8 gap-x-2">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-amber-300" size={17} />
                    <span className="text-lg text-amber-300 font-normal">{vote_average.toFixed(1)}</span>
                  </span>
                  <span className="text-xs">|</span>
                  <span>{vote_count}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <span>{`${hours}h ${minutes}m`}</span>
                <span className="text-xs">&bull;</span>
                <span>{year}</span>
                <span className="text-xs">&bull;</span>
                <span className="">{moreCount > 0 ? `${displayedGenres}, +${moreCount}` : `${displayedGenres}`}</span>
              </div>
            </div>
            <span className="block text-sm md:text-base font-light mb-3 md:mb-10">{overview}</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieDetails;
