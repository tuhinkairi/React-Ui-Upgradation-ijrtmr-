import { Link, NavLink } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { about_menu, archive_menu, thesis_menu } from "../../data/listingSection";
import MenuCard from "./cards/MenuCard";

const Navbar = () => {
  const about = useRef<HTMLDivElement>(null);
  const archive = useRef<HTMLDivElement>(null);
  const thesis = useRef<HTMLDivElement>(null);

  const handelpop = (e: React.MouseEvent<HTMLAnchorElement>, element: React.RefObject<HTMLDivElement | null>) => {
    e.preventDefault();
    const pop = element.current;
    if (pop) {
      pop.classList.remove("hidden");
      pop.classList.add("flex");
    }
  }

  const handelHide = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.classList.add("hidden");
      ref.current.classList.remove("flex");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (about.current && !about.current.contains(event.target as Node)) {
        handelHide(about);
      }
      if (archive.current && !archive.current.contains(event.target as Node)) {
        handelHide(archive);
      }
      if (thesis.current && !thesis.current.contains(event.target as Node)) {
        handelHide(thesis);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-6 gap-4 mx-auto ml-16 mr-4 xl:mr-16">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png" // replace with your actual logo path
          alt="Fifth Dimension Logo"
          className="h-10"
        />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6 font-medium">
        <li className="hover:text-primary"><NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/">Home</NavLink></li>
        <li className="hover:text-primary relative">
          <NavLink onMouseEnter={(e) => handelpop(e, about)} className={({ isActive }) => isActive ? 'text-primary' : ""} to="/aim&scope">About Us</NavLink>
          <MenuCard ref={about} links={about_menu} />
        </li>
        <li className="hover:text-primary"><NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/for-authors">For Authors</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/current-issue">Current Issue</NavLink></li>
        <li className="hover:text-primary relative">
          <NavLink onMouseEnter={(e) => handelpop(e, archive)} className={({ isActive }) => isActive ? 'text-primary' : ""} to="/archives">Archives</NavLink>
          <MenuCard ref={archive} links={archive_menu} />
        </li>
        <li className="hover:text-primary">
          <NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/conference">Conference</NavLink>
        </li>
        <li className="hover:text-primary relative">
          <NavLink onMouseEnter={(e) => handelpop(e, thesis)} className={({ isActive }) => isActive ? 'text-primary' : ""} to="/thesis">Thesis</NavLink>
          <MenuCard ref={thesis} links={thesis_menu}/>
        </li>
        <li className="hover:text-primary"><NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/blog">Blog</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({ isActive }) => isActive ? 'text-primary' : ""} to="/contact-us">Contact Us</NavLink></li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <Link to="https://editorial.fdrpjournals.org/login?journal=2" target="_blank"><button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-md font-medium">
          Author Login
        </button></Link>
      </div>
    </nav>
  )
};

export default Navbar;
