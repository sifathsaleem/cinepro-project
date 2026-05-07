const DetailsSkeleton = () => {
  return (
    <div className="h-[80vh] w-full max-w-lg md:max-w-none mx-auto flex bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
      <div className="flex flex-1 flex-col md:flex-row h-full md:gap-10 animate-pulse">
        <div className="w-full md:w-[366px] h-[50%] md:h-full flex justify-center items-center bg-gray-300 dark:bg-gray-600 animate-pulse">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-18 text-gray-400">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>

        <div className="flex-1 md:self-center p-4">
          <div className="h-10 mb-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>

          <div className="h-5 w-1/2 mb-3 w-1/4 md:hidden bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-5 w-1/2 mb-5 bg-gray-300 dark:bg-gray-600 rounded"></div>

          <div className="h-4 mb-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 mb-1 w-[90%] bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 mb-1 w-[95%] bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-[85%] bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
