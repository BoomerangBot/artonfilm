import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const mainNavigation = [
    { name: 'Home', path: '/' },
    { name: 'Programme', path: '/programme' }
  ];

  const supportItems = [
    { name: 'Patrons', path: '/patrons' },
    { name: 'Partners', path: '/partners' },
    { name: 'Institutional', path: '/institutional' }
  ];

  const otherNavigation = [
    { name: 'Impact', path: '/impact' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];

  const shopButton = { name: 'Shop', path: '/shop' };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSupportActive = supportItems.some(item => item.path === location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-amber-500/5'
          : 'bg-black/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Palette size={20} className="text-black" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-serif">
              ArtOnFilm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative group ${
                  location.pathname === item.path
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}

            {/* Support Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSupportDropdownOpen(true)}
              onMouseLeave={() => setSupportDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative group flex items-center gap-1 ${
                  isSupportActive
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Support
                <ChevronDown size={16} className={`transition-transform ${supportDropdownOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all ${
                    isSupportActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>

              {/* Dropdown Menu */}
              {supportDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-amber-500/20 rounded-xl shadow-2xl shadow-amber-500/10 overflow-hidden">
                  {supportItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-6 py-3 text-sm font-medium transition-all ${
                        location.pathname === item.path
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative group ${
                  location.pathname === item.path
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Support Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isSupportActive
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Support
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {supportItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        location.pathname === item.path
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;