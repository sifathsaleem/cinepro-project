import { useEffect } from "react";
import PGN from "../assets/404.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {

  useEffect(() => {
    document.title = "Page not found / Cinebite"
  })

  return (
    <main className="flex items-center justify-center">
      <section className="text-center">
        <img src={PGN} alt="pageNotFound" className="mb-5" />
        <Link to="/">
          {" "}
          <button
            type="button"
            className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-500 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
          >
            Go Home
          </button>
        </Link>
      </section>
    </main>
  );
};

export default PageNotFound;
