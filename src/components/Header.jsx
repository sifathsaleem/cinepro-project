import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import MovieTheme from "../context/MovieTheme";
import DarkLogo from "../assets/logo_dark.png";
import LightLogo from "../assets/logo_light.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsOpen(false);
    e.preventDefault();

    const queryTerm = e.target.search.value;
    e.target.reset();
    navigate(`/search?q=${queryTerm}`);
  };
  const { isDark, toggleTheme } = useContext(MovieTheme);
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = "text-blue-500 hover:text-blue-400 transition-colors";
  const inActiveClass = "hover:text-blue-400 transition-colors";
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white dark:bg-gray-800 text-black dark:text-slate-100 w-full shadow-gray-700 z-20">
        <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3 gap-6">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={isDark ? DarkLogo : LightLogo} className="w-28" alt="Flowbite Logo" />
          </NavLink>

          <ul className="hidden md:flex items-center gap-8 font-medium flex-1 justify-center">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                Top
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                Upcoming
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            <button className="cursor-pointer  w-5 flex justify-center items-center" onClick={toggleTheme}>
              {isDark ? <IoSunny size={20} className="text-gray-300" /> : <FaMoon className="text-gray-700" size={18} />}
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-52 ps-9 pe-3 py-2 bg-white dark:bg-gray-700 border border-gray-500 text-black dark:text-slate-100 text-sm rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="search"
                />
              </form>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-slate-400 rounded-lg md:hidden hover:bg-gray-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-700 px-4 py-3 md:hidden">
            {/* Mobile Search */}
            <ul className="font-medium flex flex-col items-center">
              <li className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Home
                </NavLink>
              </li>
              <li className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Popular
                </NavLink>
              </li>
              <li className="p-2" onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Top
                </NavLink>
              </li>
              <li className="p-2 mb-2" onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full ps-9 pe-3 py-2 bg-gray-100 dark:bg-gray-950 border border-gray-700 text-black dark:text-slate-100 text-sm rounded-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="search"
                />
              </form>
            </div>

            {/* <ul className="flex flex-col font-medium">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClassMob : inActiveClassMob)} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClassMob : inActiveClassMob)}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClassMob : inActiveClassMob)}>
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClassMob : inActiveClassMob)}>
                  Upcoming
                </NavLink>
              </li>
            </ul> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
