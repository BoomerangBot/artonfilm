import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { quotes } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ArtOnFilm</h3>
            <p className="text-gray-400 text-sm mb-5">
              Connecting Britain's leading visual artists with Europe's most dynamic cultural cities.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/artonfilm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ArtOnFilm on LinkedIn"
                data-testid="footer-linkedin-link"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg shadow-[#0A66C2]/30 hover:scale-110 transition-transform"
              >
                <Linkedin size={20} fill="currentColor" stroke="currentColor" />
              </a>
              <a
                href="https://www.instagram.com/artontour4artonfilm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ArtOnFilm on Instagram"
                data-testid="footer-instagram-link"
                className="w-11 h-11 flex items-center justify-center rounded-full text-white shadow-lg shadow-pink-500/30 hover:scale-110 transition-transform"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Acquire Works
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/programme" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tour Programme
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
          {/* Disclaimer */}
          <div className="mb-8 p-6 bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-red-500 rounded-r-lg">
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="font-semibold text-white">DISCLAIMER:</span> ArtOnFilm Ltd is a creative intellectual property and advertising company that commissions and releases artworks through its programme. The company does not operate as a financial investment vehicle, fund, broker, or art marketplace.
            </p>
          </div>

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
            
            {/* Trust Line */}
            <p className="text-white text-sm font-medium">
              ArtOnFilm Ltd — United Kingdom
            </p>
            <p className="text-amber-400 text-xs tracking-wider">
              Creative IP Production & Advertising
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm mt-4">
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
            
            {/* The Unknown Salesman Quotes */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm italic mb-3 leading-relaxed">
                {quotes.unknownSalesman.adventure}
              </p>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                {quotes.unknownSalesman.life}
              </p>
              <p className="text-xs text-gray-500 mt-3">— The Unknown Salesman</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;