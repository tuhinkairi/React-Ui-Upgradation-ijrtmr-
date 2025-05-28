import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-base font-semibold text-dark mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Features</li>
            <li className="hover:text-primary cursor-pointer">Works</li>
            <li className="hover:text-primary cursor-pointer">Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-base font-semibold text-dark mb-4">HELP</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Customer Support</li>
            <li className="hover:text-primary cursor-pointer">Delivery Details</li>
            <li className="hover:text-primary cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold text-dark mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Free eBooks</li>
            <li className="hover:text-primary cursor-pointer">Development Tutorial</li>
            <li className="hover:text-primary cursor-pointer">How-to Blog</li>
            <li className="hover:text-primary cursor-pointer">YouTube Playlist</li>
          </ul>
        </div>

        {/* Subscribe & Contact */}
        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="text-base font-semibold text-dark mb-4">
            SUBSCRIBE TO NEWSLETTER
          </h3>
          <form className="flex items-center max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-hover"
            >
              Join
            </button>
          </form>

          <div className="mt-6 space-y-1">
            <div>
              <span className="text-gray-500 uppercase 
              ">Call Us</span>
              <div className="baset-semibold text-dark">(+1) 456–4933</div>
            </div>
            <div>
              <span className="text-gray-500 uppercase 
              ">Email Us</span>
              <div className="baset-semibold text-dark">
                mail@example.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-gray-500">© Copyright 2021, All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-gray-600">
          <FaTwitter className="hover:text-blue-500 text-xl cursor-pointer" />
          <FaFacebookF className="hover:text-blue-700 text-xl cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 text-xl cursor-pointer" />
          <FaGithub className="hover:text-dark text-xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
