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


export const scrollToAnchor = (anchorLink, offset = 100) => {
  const targetElement = document.querySelector(anchorLink);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset; // Subtract the offset (default= 100px)

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};



  