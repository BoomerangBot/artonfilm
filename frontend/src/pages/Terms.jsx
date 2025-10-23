import React from 'react';

const Terms = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>
      
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">Terms and Conditions</h1>
          <p className="text-gray-400 mb-12">Effective Date: 1 January 2025</p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your use of the ArtOnFilm website and services provided by 
                ArtOnFilm LTD (registered in England and Wales, company number [TBC]).
              </p>
              <p className="mb-4">
                <strong>Company Details:</strong><br/>
                ArtOnFilm LTD<br/>
                12 Acorn Business Park<br/>
                Northarbour Road, Portsmouth<br/>
                England, PO6 3TH
              </p>
              <p>
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part 
                of these Terms, you must not use our website or services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>"Company", "we", "our", "us"</strong> refers to ArtOnFilm LTD</li>
                <li><strong>"Website"</strong> refers to www.artonfilm.uk and all related websites</li>
                <li><strong>"Services"</strong> refers to all services provided by the Company</li>
                <li><strong>"User", "you", "your"</strong> refers to the person accessing or using the Website</li>
                <li><strong>"Content"</strong> refers to all text, images, videos, and other materials on the Website</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on ArtOnFilm's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="mb-4">Under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p>
                All content, including text, graphics, logos, images, and software, is the property of ArtOnFilm or its content 
                suppliers and is protected by international copyright laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any harmful code or malware</li>
                <li>Collect or harvest information from the website</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
              <p>
                The materials on ArtOnFilm's website are provided on an 'as is' basis. ArtOnFilm makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitations</h2>
              <p>
                In no event shall ArtOnFilm or its suppliers be liable for any damages arising out of the use or inability 
                to use the materials on ArtOnFilm's website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
              <p>
                ArtOnFilm may revise these terms of usage at any time without notice. By using this website, 
                you agree to be bound by the current version of these Terms of Usage.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p>
                If you have any questions about these Terms of Usage, please contact us at:
                <br/>
                <a href="mailto:rh@artonfilm.uk" className="text-amber-400 hover:text-amber-300 transition-colors">
                  rh@artonfilm.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;