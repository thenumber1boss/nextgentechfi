// src/hooks/useMetaPixelTracking.js
// to track website visitors for META re-targeting

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useMetaPixelTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'PageView', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useMetaPixelTracking;
