import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200); // Adding a small delay to ensure routing has fully completed

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
