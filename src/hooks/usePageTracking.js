// src/hooks/usePageTracking.js
// Tracks page views on route changes

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    gtag('config', 'G-85Z8W3FF36', {
      page_path: location.pathname,
    });
  }, [location]);
};

export default usePageTracking;
