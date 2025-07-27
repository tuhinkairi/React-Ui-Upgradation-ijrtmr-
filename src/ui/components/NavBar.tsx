import { Link, NavLink } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { about_menu, auther_menu, conference_menu, thesis_menu } from "../../data/listingSection";
import MenuCard from "./cards/MenuCard";
import { BiMenuAltRight } from "react-icons/bi";
import MenuMoblieCard from "./responsive/MenuMoblieCard";
import { useAppDispatch } from "../../lib/store/store";
import { setCurrentPage } from "../../lib/store/Features/paginationSlice";

const Navbar = () => {
  const about = useRef<HTMLDivElement>(null);
  const auther = useRef<HTMLDivElement>(null);
  const thesis = useRef<HTMLDivElement>(null);
  const conference = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch()
  // responsive
  const [isShowing, setShowing] = useState<boolean>(false)

  const hideAllMenus = () => {
    [about, auther, thesis, conference].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add("hidden");
        ref.current.classList.remove("flex");
      }
    });
  };

  const handlePopup = (
    e: React.MouseEvent<HTMLButtonElement>,
    element: React.RefObject<HTMLDivElement | null>
  ) => {
    e.preventDefault();
    hideAllMenus();
    if (element.current) {
      element.current.classList.remove("hidden");
      element.current.classList.add("flex");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !about.current?.contains(event.target as Node) &&
        !auther.current?.contains(event.target as Node) &&
        !thesis.current?.contains(event.target as Node) &&
        !conference.current?.contains(event.target as Node)
      ) {
        hideAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center py-6 gap-4 mx-auto ml-16 mr-4 xl:mr-16  text-sm xl:text-base 2xl:text-base">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img loading='lazy'
            src="/logo.webp" alt="Fifth Dimension Logo" className="h-10 lg:h-12" />
        </div>

        {/* Nav Links */}
        <ul className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6 font-medium">
          <li className="hover:text-primary">
            <NavLink onClick={()=>dispatch(setCurrentPage(1))} className={({ isActive }) => (isActive ? "text-primary" : "")} to="/">
              Home
            </NavLink>
          </li>

          <li className="hover:text-primary relative">
            <button
              onMouseEnter={(e) => handlePopup(e, about)}
              onClick={(e) => { e.preventDefault(); handlePopup(e, about) }}
            >
              About Us
            </button>
            <MenuCard hide={hideAllMenus} ref={about} links={about_menu} />
          </li>


          <li className="hover:text-primary relative">
            <button
              onMouseEnter={(e) => handlePopup(e, auther)}
              onClick={(e) => { e.preventDefault(); handlePopup(e, auther) }}

            >
              For Authors

            </button>
            <MenuCard hide={hideAllMenus} ref={auther} links={auther_menu} />
          </li>
          <li className="hover:text-primary">
            <NavLink onClick={()=>dispatch(setCurrentPage(1))} className={({ isActive }) => (isActive ? "text-primary" : "")} to="/current-issue/paperlist?year=2025&volume=5&issue=3">
              Current Issue
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink onClick={()=>dispatch(setCurrentPage(1))} className={({ isActive }) => (isActive ? "text-primary" : "")} to="/archives">
              Archives
            </NavLink>
          </li>


          <li className="hover:text-primary relative">
            <button onMouseEnter={(e) => handlePopup(e, conference)}
              onClick={(e) => { e.preventDefault(); handlePopup(e, conference) }}>
              Conference
            </button>
            <MenuCard hide={hideAllMenus} ref={conference} links={conference_menu} />
          </li>

          <li className="hover:text-primary relative">
            <button
              onMouseEnter={(e) => handlePopup(e, thesis)}
              onClick={(e) => { e.preventDefault(); handlePopup(e, thesis) }}
            >
              Thesis
            </button>
            <MenuCard hide={hideAllMenus} ref={thesis} links={thesis_menu} />
          </li>

          <li className="hover:text-primary">
            <NavLink onClick={()=>dispatch(setCurrentPage(1))} className={({ isActive }) => (isActive ? "text-primary" : "")} to="/blogs">
              Blog
            </NavLink>
          </li>

          <li className="hover:text-primary">
            <NavLink onClick={()=>dispatch(setCurrentPage(1))} className={({ isActive }) => (isActive ? "text-primary" : "")} to="/contact-us">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex space-x-4">
          <Link
            to="https://editorial.fdrpjournals.org/login?journal=2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-md font-medium">
              Author Login
            </button>
          </Link>
        </div>
      </nav>

      {/* mini nav */}
      <nav className="flex items-center justify-between py-4 px-6  lg:hidden relative">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img loading='lazy'
            src="/logo.webp" alt="Fifth Dimension Logo" className="h-10 w-auto" />
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            to="https://editorial.fdrpjournals.org/login?journal=2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-md font-medium">
              Login
            </button>
          </Link>
          <button onClick={() => setShowing(!isShowing)} className="p-2 rounded-md hover:bg-gray-100 transition lg:hidden">
            <BiMenuAltRight className="w-6 h-6" />
          </button>
        </div>
        {isShowing && <MenuMoblieCard onClose={() => setShowing(false)} />}
      </nav>

    </>
  );
};

export default Navbar;
