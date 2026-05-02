import { useLayoutEffect } from "react";

const useTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = `${title} | Cinepro`;
    }
  }, [title]);
};

export default useTitle;
