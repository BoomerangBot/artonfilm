import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ArtOnFilm</h3>
            <p className="text-gray-400 text-sm">
              Connecting Britain's leading visual artists with Europe's most dynamic cultural cities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programme" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/patrons" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Become a Patron
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Corporate Partnership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">rh@artonfilm.uk</p>
            <p className="text-gray-400 text-sm">United Kingdom</p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/gdpr-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              GDPR Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Usage
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-3">
          <p className="text-gray-500 text-sm">
            &copy; 2025 ArtOnFilm.uk · All Rights Reserved
          </p>
          <p className="text-gray-400 text-sm font-medium">
            Ethics Is Wealth · Contribution Not Content · Just Do
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;