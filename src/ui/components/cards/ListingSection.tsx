import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ListingSection = ({
  data,
  title,
}: {
  data: { title: string; link: string }[];
  title: string;
}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const path = useLocation().pathname
  useEffect(() => {
    const checkHeight = () => {
      if (listRef.current && containerRef.current) {
        const leftPanel = document.getElementsByClassName("lhs")[0].firstElementChild
        
        if (leftPanel) {
          const panelHeight = leftPanel.clientHeight;
          const listHeight = listRef.current.scrollHeight;
          const shouldBeDropdown = listHeight > panelHeight * 0.30;
          // console.log(panelHeight, listHeight, shouldBeDropdown)
          setIsDropdown(shouldBeDropdown);
        }
      }
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);
    
    // Use ResizeObserver for better detection
    const resizeObserver = new ResizeObserver(checkHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkHeight);
      resizeObserver.disconnect();
    };
  }, [data,path]);

  const handleItemClick = (item: { title: string; link: string }) => {
    setSelectedItem(item.title);
    setIsOpen(false);
  };

  if (isDropdown && ["/current-issue","/conference", "/thesis","/archives"].includes(path)) {
    return (
      <div 
        ref={containerRef}
        className="max-w-md w-full mx-auto bg-white rounded-2xl shadowSprade borderPrimary p-6"
      >
        <h2 className="text-lg 2xl:text-xl capitalize font-semibold text-primary-text mb-4">
          {title}
        </h2>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full borderPrimaryHover text-gray-800 font-medium rounded-md py-2 px-4 transition-colors flex items-center justify-between bg-white border"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="truncate">
              {selectedItem || `Select ${title.toLowerCase()}`}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border borderPrimary rounded-md shadow-lg max-h-60 overflow-y-auto z-20">
                <ul className="py-1">
                  {data.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.link}
                        rel="noopener noreferrer"
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 transition-colors"
                        onClick={() => handleItemClick(link)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Regular list view
  return (
    <div 
      ref={containerRef}
      className="max-w-md w-full mx-auto bg-white rounded-2xl shadowSprade borderPrimary p-6"
    >
      <h2 className="text-lg 2xl:text-xl capitalize font-semibold text-primary-text mb-4">
        {title}
      </h2>
      <div ref={listRef}>
        <ul className="space-y-3">
          {data.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.link}
                rel="noopener noreferrer"
                className="block w-full borderPrimaryHover text-gray-800 font-medium rounded-md py-2 px-4 transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingSection;