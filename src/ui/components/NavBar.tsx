import { Link, NavLink } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { about_menu, archive_menu, thesis_menu } from "../../data/listingSection";
import MenuCard from "./cards/MenuCard";

const Navbar = () => {
  const about = useRef<HTMLDivElement>(null);
  const archive = useRef<HTMLDivElement>(null);
  const thesis = useRef<HTMLDivElement>(null);

  const hideAllMenus = () => {
    [about, archive, thesis].forEach(ref => {
      if (ref.current) {
        ref.current.classList.add("hidden");
        ref.current.classList.remove("flex");
      }
    });
  };

  const handlePopup = (
    e: React.MouseEvent<HTMLAnchorElement>,
    element: React.RefObject<HTMLDivElement |null>
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
        !archive.current?.contains(event.target as Node) &&
        !thesis.current?.contains(event.target as Node)
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
    <nav className="flex justify-between items-center py-6 gap-4 mx-auto ml-16 mr-4 xl:mr-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Fifth Dimension Logo" className="h-10" />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6 font-medium">
        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/">
            Home
          </NavLink>
        </li>

        <li className="hover:text-primary relative">
          <NavLink
            onMouseEnter={(e) => handlePopup(e, about)}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/aim&scope"
          >
            About Us
          </NavLink>
          <MenuCard hide={hideAllMenus} ref={about} links={about_menu} />
        </li>

        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/for-authors">
            For Authors
          </NavLink>
        </li>

        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/current-issue">
            Current Issue
          </NavLink>
        </li>

        <li className="hover:text-primary relative">
          <NavLink
            onMouseEnter={(e) => handlePopup(e, archive)}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/archives"
          >
            Archives
          </NavLink>
          <MenuCard hide={hideAllMenus} ref={archive} links={archive_menu} />
        </li>

        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/conference">
            Conference
          </NavLink>
        </li>

        <li className="hover:text-primary relative">
          <NavLink
            onMouseEnter={(e) => handlePopup(e, thesis)}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/thesis"
          >
            Thesis
          </NavLink>
          <MenuCard hide={hideAllMenus} ref={thesis} links={thesis_menu} />
        </li>

        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/blog">
            Blog
          </NavLink>
        </li>

        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => (isActive ? "text-primary" : "")} to="/contact-us">
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
  );
};

export default Navbar;
