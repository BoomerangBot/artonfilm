import React from 'react';
import { Link } from 'react-router-dom';
import { quotes } from '../mock';

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
            <p className="text-gray-400 text-sm mb-2">justart@artonfilm.uk</p>
            <p className="text-gray-400 text-sm">United Kingdom</p>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-white/10 pt-8">
          {/* Motto badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-400/30 rounded-full">
              <span className="text-amber-400 text-xs font-semibold tracking-wider">Art can be Free · Exposure Is Priceless</span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-400/30 rounded-full">
              <span className="text-purple-400 text-xs font-semibold tracking-wider">Fortune Favours the Givers</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ArtOnFilm.uk · All Rights Reserved
            </p>
            <p className="text-gray-300 text-sm font-medium">
              Ethics Is Wealth · Contribution Not Content · Just Do
            </p>
            <p className="text-gray-400 text-sm italic max-w-2xl mx-auto">
              Join us to turn culture into contribution and light into legacy.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">·</span>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Use
              </Link>
              <span className="text-gray-600">·</span>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Cookie Policy
              </Link>
              <span className="text-gray-600">·</span>
              <Link to="/gdpr-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Accessibility Statement
              </Link>
            </div>
            <p className="text-amber-400 text-lg font-light italic pt-4">
              Together, the World Is Yours.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;