  import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
  import { useLocation } from 'react-router';

  const ScrollToTopBtn: React.FC = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = useCallback(() => {
      const dom = document.querySelector('#container-main');
      if (dom && window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, []);

    const scrollToTop = () => {
      const dom = document.getElementById('container-main');
      if (dom) dom.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, [toggleVisibility]);

    useEffect(() => {
      const dom = document.getElementById('container-main');
      if (dom) dom.scrollIntoView({ behavior: 'smooth' });
    }, [pathname]);

    return (
      <>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed right-14 bottom-10 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        )}
      </>
    );
  };

  export default ScrollToTopBtn;
