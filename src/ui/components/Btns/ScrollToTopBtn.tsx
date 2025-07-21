import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { useLocation } from 'react-router';

const ScrollToTopBtn: React.FC = () => {
    const { pathname } = useLocation();
    const [isVisible] = useState(true);

    const scrollToTop = () => {
        const dom = document.getElementById('container-main');
        if (dom) dom.scrollIntoView({ behavior: 'smooth' });
    };

    

    useEffect(() => {
        const dom = document.getElementById('container-main');
        if (dom) dom.scrollIntoView({ behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed left-6 bottom-6 bg-gray-800 text-white p-5 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-5 h-5 animate-bounce" />
                </button>
            )}
        </>
    );
};

export default ScrollToTopBtn;
