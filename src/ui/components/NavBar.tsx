import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/">Home</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/about-us">About Us</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/for-authors">For Authors</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/current-issue">Current Issue</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/archives">Archives</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/conference">Conference</NavLink></li>
        <li className="hover:text-primary"><NavLink className={({isActive})=>isActive?'text-primary':""} to="/contact-us">Contact Us</NavLink></li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-md font-medium">
          Author Login
        </button>
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-md font-medium">
          IJSREAT Partner Network Login
        </button>
      </div>
    </nav>
  )
};

export default Navbar;
