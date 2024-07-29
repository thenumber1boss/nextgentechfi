import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// chunck array function to split data into smaller array chunks
export const ChunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };



  // ScrollToTop.jsx navigates pathnames to top of the page
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


  