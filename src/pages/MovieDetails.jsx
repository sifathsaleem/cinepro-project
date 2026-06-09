import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import posterBackup from "../assets/poster_backup.jpg";
import useTitle from "../hooks/useTitle";
import { useContext, useEffect, useState } from "react";
import DetailsSkeleton from "../components/DetailsSkeleton";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import VideoPlayerModel from "../components/VideoPlayerModel";
import UIContext from "../context/UIContext";
import { options } from "../utils/Options";

const MovieDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { data, loading } = useFetch(`movie/${id}`);
  const { original_title, backdrop_path, poster_path, overview, release_date, genres, vote_average, vote_count, runtime } = data;
  const { isVideoOpen, setIsVideoOpen } = useContext(UIContext);
  const backdropImg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const posterImg = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBackup;
  const year = release_date ? release_date.split("-")[0] : null;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const displayedGenres = genres
    ?.slice(0, 2)
    .map((genre) => genre.name)
    .join(", ");
  const activeBtnClass = "bg-blue-600 hover:bg-blue-700 cursor-pointer";
  const disabledBtnClass = "bg-gray-400 text-slate-300";
  const moreCount = genres?.length - 2;
  const [trailerKey, setTrailerKey] = useState(null);

  useTitle(original_title);

  useEffect(() => {
    window.scrollTo(0, 0);
    playTrailer();
  }, []);

  const playTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);

      const data = await response.json();

      const results = Array.isArray(data.results) ? data.results : [];
      const trailer = results.find((v) => v.type === "Trailer" && v.site === "YouTube");
      console.log(trailer);
      setTrailerKey(trailer?.key || null);
    } catch (error) {
      console.error("Trailer error:", error);
    }
  };

  return (
    <main className="flex">
      {loading ? (
        <DetailsSkeleton />
      ) : (
        <div className="flex-1">
          {isVideoOpen && <VideoPlayerModel trailerKey={trailerKey} setIsVideoOpen={setIsVideoOpen} />}
          <div className="flex flex-col md:flex-row md:gap-x-5 w-full overflow-hidden mx-auto max-w-lg md:max-w-none rounded-xl h-[80vh] items-center text-white relative">
            <img src={backdropImg} alt="" className="absolute hidden md:inline-block inset-0 w-full h-full md:blur" />
            <div className="bg-black/50 absolute hidden md:block inset-0"></div>
            <div className="w-full h-[50%] md:h-full md:flex-1 overflow-hidden flex relative">
              <img src={posterImg} alt="" className="w-full object-top object-cover" />
              <button onClick={() => navigate(-1)} className="absolute bg-gray-500/50 backdrop-blur-sm p-3 rounded-full top-5 left-5 hover:cursor-pointer">
                <FaArrowLeft />
              </button>
              <button className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 backdrop-blur-md rounded-full md:hidden">
                <FaCirclePlay
                  onClick={() => {
                    if (trailerKey) setIsVideoOpen(true);
                  }}
                  size={48}
                />
              </button>
            </div>

            <div className="bg-neutral-100 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent flex-1 md:flex-2 text-slate-800 md:text-slate-100 dark:text-slate-100 flex flex-col p-4 z-10">
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
              <span className="block text-sm md:text-base font-light mb-3 md:mb-8">{overview}</span>

              <div className="buttons hidden md:block">
                <button
                  onClick={() => {
                    if (trailerKey) setIsVideoOpen(true);
                  }}
                  className={`${trailerKey ? activeBtnClass : disabledBtnClass} font-medium px-5 py-3 rounded-md flex gap-x-2 items-center`}
                >
                  <FaCirclePlay size={18} /> Play Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieDetails;
