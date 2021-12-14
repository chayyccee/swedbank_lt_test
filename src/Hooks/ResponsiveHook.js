import { useState, useEffect } from 'react';

// test for multiple media queries
export const useMedia = (query) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      listener();
      media.addEventListener('change', listener);
  
      return () => media.removeEventListener('change', listener);
    }, [matches, query]);
    return matches;
  };

// test for desktop media
 export const useDesktopMedia = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
      const media = window.matchMedia('(min-width: 960px)');
      const listener = () => setIsDesktop(media.matches);
      listener();
      window.addEventListener('resize', listener);
  
      return () => window.removeEventListener('resize', listener);
    }, [isDesktop]);
    return isDesktop;
  };