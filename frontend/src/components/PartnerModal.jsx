import React from 'react';
import { X, Globe, Instagram, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const PartnerModal = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-zinc-900 border-2 border-amber-500/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-all"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Header with Logo */}
        <div className="relative p-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-6 mb-4">
            {/* Logo Container */}
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center overflow-hidden">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Partner Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 font-serif">
                {partner.name}
              </h2>
              {partner.subtitle && (
                <p className="text-lg text-amber-400 mb-1">{partner.subtitle}</p>
              )}
              <p className="text-gray-400 flex items-center gap-2">
                <span className="text-amber-400">📍</span>
                {partner.location}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-amber-400 mb-3">About</h3>
            <p className="text-gray-300 leading-relaxed">
              {partner.description}
            </p>
          </div>

          {/* Social Links */}
          {(partner.website || partner.instagram || partner.facebook || partner.twitter || partner.linkedin || partner.email) && (
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {partner.website && partner.website !== '#' && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Globe size={18} className="text-amber-400" />
                    <span className="text-gray-300">Website</span>
                  </a>
                )}
                {partner.instagram && partner.instagram !== '#' && (
                  <a
                    href={partner.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Instagram size={18} className="text-amber-400" />
                    <span className="text-gray-300">Instagram</span>
                  </a>
                )}
                {partner.facebook && partner.facebook !== '#' && (
                  <a
                    href={partner.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Facebook size={18} className="text-amber-400" />
                    <span className="text-gray-300">Facebook</span>
                  </a>
                )}
                {partner.twitter && partner.twitter !== '#' && (
                  <a
                    href={partner.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Twitter size={18} className="text-amber-400" />
                    <span className="text-gray-300">Twitter</span>
                  </a>
                )}
                {partner.linkedin && partner.linkedin !== '#' && (
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Linkedin size={18} className="text-amber-400" />
                    <span className="text-gray-300">LinkedIn</span>
                  </a>
                )}
                {partner.email && (
                  <a
                    href={`mailto:${partner.email}`}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                  >
                    <Mail size={18} className="text-amber-400" />
                    <span className="text-gray-300">Email</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
