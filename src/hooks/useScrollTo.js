import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
};
