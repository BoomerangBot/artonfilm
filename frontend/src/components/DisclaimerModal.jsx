import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const accepted = localStorage.getItem('artOnFilmDisclaimerAccepted');
    if (!accepted) {
      setIsOpen(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setHasAccepted(true);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('artOnFilmDisclaimerAccepted', 'true');
    setHasAccepted(true);
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDecline = () => {
    // Redirect user away from the site
    window.location.href = 'about:blank';
  };

  if (!isOpen || hasAccepted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-500/20 overflow-hidden my-4">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-b border-amber-500/30 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-amber-500/20 rounded-xl border border-amber-500/30 flex-shrink-0">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">Website Disclaimer & Terms of Access</h2>
              <p className="text-amber-400 text-xs sm:text-sm font-medium mt-1">Please read carefully before entering this website</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 sm:p-6 md:p-8 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <p className="text-white font-medium text-sm sm:text-base md:text-lg">
              By proceeding to access this website, you confirm that you have read, understood, and agree to the following terms and conditions:
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-400 mb-2">No Financial Advice</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  The information contained on this website is provided for general informational and educational purposes only. Nothing on this site constitutes, or should be construed as, financial, legal, tax, or investment advice. You should seek independent professional advice before making any investment decisions.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-400 mb-2">Investment Risk</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Investing in art involves risks, including the potential loss of capital. Past performance of artworks, artists, or markets is not indicative of future results. Prices and valuations can fluctuate, and there is no guarantee of liquidity or future appreciation.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-400 mb-2">Accuracy of Information</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  While every effort has been made to ensure the accuracy of the information provided, no warranty, express or implied, is given as to its completeness or reliability. The website owner accepts no responsibility for any errors or omissions, or for any loss arising directly or indirectly from use of or reliance on the information presented.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-400 mb-2">Jurisdiction</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  Access to this website may be restricted by law in certain jurisdictions. It is your responsibility to ensure that viewing this material does not contravene the laws or regulations of your country of residence.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-400 mb-2">Acceptance of Terms</h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  By clicking "I Agree – Enter Site", you acknowledge that you understand and accept these terms in full. If you do not agree, please exit this website immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="relative bg-zinc-900/50 border-t border-white/10 p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <button
              onClick={handleAccept}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 text-sm sm:text-base"
            >
              I Agree – Enter Site
            </button>
            <button
              onClick={handleDecline}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-gray-300 font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 transition-all text-sm sm:text-base"
            >
              I Do Not Agree – Exit
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
            Your acceptance will be stored locally and you won't see this message again on this device.
          </p>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.5);
        }
      `}</style>
    </div>
  );
};

export default DisclaimerModal;
