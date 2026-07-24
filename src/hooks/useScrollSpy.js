import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
