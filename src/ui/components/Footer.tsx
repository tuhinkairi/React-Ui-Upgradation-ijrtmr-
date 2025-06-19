import { useState } from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle newsletter subscription
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FF8C421A] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              CONTACT US
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Fifth Dimension research Publication (P) Ltd.</p>
              <p>No: 38D5F, Rajaji nagar, Ariyalur-621713.</p>
              <p>Tamilnadu, India.</p>
              <div className="mt-4">
                <p>Email: <a href="mailto:editorinchief@ijsreat.com" className="text-blue-600 hover:text-blue-800">editorinchief@ijsreat.com</a></p>
                <p><a href="mailto:Support@fdrpjournals.org" className="text-blue-600 hover:text-blue-800">Support@fdrpjournals.org</a></p>
              </div>
              <p>Mobile: +91 9840521421</p>
            </div>
          </div>

          {/* Guidelines Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              GUIDELINES
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="pointer hover:text-primary">Instructions for Authors</a></li>
              <li><a href="#" className="pointer hover:text-primary">Editor guidelines</a></li>
              <li><a href="#" className="pointer hover:text-primary">Journal Publishing Process</a></li>
              <li><a href="#" className="pointer hover:text-primary">Archives</a></li>
              <li><a href="#" className="pointer hover:text-primary">Call for Papers</a></li>
              <li><a href="#" className="pointer hover:text-primary">Editorial Management System</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              POLICIES
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Peer Review Policy</a></li>
              <li><a href="#" className="hover:text-primary">Publication Policy</a></li>
              <li><a href="#" className="hover:text-primary">Ethics And Policies</a></li>
              <li><a href="#" className="hover:text-primary">Crossmark Policy</a></li>
              <li><a href="#" className="hover:text-primary">Open Access Policy</a></li>
              <li><a href="#" className="hover:text-primary">Plagiarism Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className=''>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-3 py-2 border border-gray-200 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm font-medium"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Licensing */}
            <div className="text-center w-fit mx-auto">
              <p className="text-sm text-gray-600 mb-2">
                Copyright © 2025 IJSREAT Published by Fifth Dimension research Publication (P) Ltd. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-600">
                Work is licensed under a Creative Commons Attribution 4.0 International License.
              </p>
              <div className="mt-2 text-center">
                <div className="flex flex-wrap justify-center space-x-1 text-sm">
                  <a href="#" className="text-primary hover:text-primary-hover">Privacy Policy</a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-primary hover:text-primary-hover">Terms And Conditions</a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-primary hover:text-primary-hover">Refund Policy</a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Links */}

        </div>
      </div>
    </footer>
  );
}