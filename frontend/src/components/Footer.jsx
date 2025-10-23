import React from 'react';
import { Link } from 'react-router-dom';
import { charityLogos } from '../mock';

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

        {/* Charity Partners */}
        <div className="border-t border-white/10 pt-8">
          <h4 className="text-white font-semibold mb-6 text-center">Charity Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {charityLogos.map((charity) => {
              const initials = charity.name.split(' ').map(word => word[0]).join('');
              return (
                <div 
                  key={charity.name} 
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                    <span className="text-xl font-bold text-red-400">{initials}</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium text-center group-hover:text-white transition-colors">
                    {charity.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ArtOnFilm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;