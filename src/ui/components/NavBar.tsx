
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
        <li className="text-primary"><a href="/">Home</a></li>
        <li className="hover:text-primary"><a href="/about-us">About Us</a></li>
        <li className="hover:text-primary"><a href="/for-authors">For Authors</a></li>
        <li className="hover:text-primary"><a href="/current-issue">Current Issue</a></li>
        <li className="hover:text-primary"><a href="/archives">Archives</a></li>
        <li className="hover:text-primary"><a href="/conference">Conference</a></li>
        <li className="hover:text-primary"><a href="/contact-us">Contact Us</a></li>
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
