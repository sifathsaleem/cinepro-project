const Footer = () => {
  return (
    <footer className="bg-white shadow shadow-gray-700 dark:bg-gray-800 text-black dark:text-white rounded-base">
      <div className="w-full mx-auto text-sm max-w-screen p-4 text-center sm:flex md:items-center sm:justify-between">
        <span className="text-sm sm:text-center">
          © 2026{" "}
          <a href="/" className="hover:underline">
            Cinepro™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="me-4 md:me-6 hover:text-blue-500">
              YouTube
            </a>
          </li>
          <li>
            <a href="#" className="me-4 md:me-6 hover:text-blue-500">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="me-4 md:me-6 hover:text-blue-500">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              X
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
