import { Link } from "react-router-dom";
import { useContext } from "react";
import posterBackup from "../assets/poster_backup.jpg";
import MovieTheme from "../context/MovieTheme";
import { FaStar } from "react-icons/fa";

const Card = ({ movie }) => {
  console.log(movie);
  const { id, overview, original_title, poster_path, release_date, vote_average } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBackup;
  const { isDark } = useContext(MovieTheme);
  const year = release_date.split("-")[0];

  return (
    <Link to={`/movie/${id}`} className="flex max-w-sm w-full flex-1 transition-transform">
      <div className="bg-neutral-100 dark:bg-gray-800 flex-1 text-slate-800 dark:text-slate-100 drop-shadow rounded-xl overflow-hidden flex flex-col hover:scale-102 transition-all duration-300">
        <img src={image} className="h-[350px] object-cover object-top" alt="" />
        {/* <div className="w-full rounded-t-xl bg-black bg-cover  bg-center" style={{ backgroundImage: `url(${image})` }}></div> */}
        <div className="p-5 flex-1font-light">
          <h5 className="mb-3 text-xl font-semibold tracking-tight text-heading">{original_title}</h5>
          <div className="text-slate-800 dark:text-slate-300  text-sm flex items-center gap-x-3 mb-3">
            <span className="flex items-center gap-x-1 ">
              <span>{vote_average.toFixed(1)}</span>
              <FaStar className="text-amber-300" />
            </span>
            <span>{year}</span>
          </div>
          <p className="text-body line-clamp-3 text-sm text-slate-800 dark:text-slate-300 font-light">{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
