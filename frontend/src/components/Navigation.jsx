import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const navRef = useRef(null);

  const mainNavigation = [
    { name: 'Home', path: '/' },
    { 
      name: 'Artists', 
      path: '/artists',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Artists', path: '/artists' },
        { name: 'Artist CV', path: '/artist-cv' }
      ]
    },
    { name: 'Collections', path: '/collection' },
    { name: 'Tour', path: '/programme' },
    { name: 'Shop', path: '/shop' },
    { name: 'Invest', path: '/invest' },
    { 
      name: 'About', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About ArtOnFilm', path: '/about' },
        { name: 'FAQ', path: '/faq' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileDropdowns({});
  }, [location.pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const isItemActive = (item) => {
    if (item.hasDropdown) {
      return item.dropdownItems.some(di => location.pathname === di.path);
    }
    return location.pathname === item.path;
  };

  return (
    <nav
      ref={navRef}
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
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-gold bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all">
              ArtOnFilm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`px-3 py-2 text-sm font-medium transition-all rounded-lg relative group inline-flex items-center gap-1 ${
                      isItemActive(item)
                        ? 'text-amber-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all ${
                        isItemActive(item) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-amber-500/20 rounded-xl shadow-lg shadow-amber-500/10 overflow-hidden">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={`block px-4 py-3 text-sm font-medium transition-all ${
                            location.pathname === dropdownItem.path
                              ? 'text-amber-400 bg-amber-500/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-lg relative group ${
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
              )
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
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      isItemActive(item)
                        ? 'text-amber-400 bg-amber-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileDropdowns[item.name] && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            location.pathname === dropdownItem.path
                              ? 'text-amber-400 bg-amber-500/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
