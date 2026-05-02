const Skeleton = () => {
  return (
    <div className="rounded-xl max-w-sm w-full overflow-hidden">
      <div className=" flex flex-col">
        <div className="bg-gray-300 dark:bg-gray-600 h-[562px] flex justify-center items-center">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15 text-gray-400 animate-pulse">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className="p-5 bg-gray-100 dark:bg-gray-800">
          <div className="mb-3 h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="mb-3 h-5 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>

          <span className="animate-pulse">
            <div className="mb-1 w-[95%] h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="mb-1 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-[90%] mb-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
