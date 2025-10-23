import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>
      
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                ArtOnFilm ("we", "our", "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Identity Data: name, title</li>
                <li>Contact Data: email address, telephone numbers</li>
                <li>Technical Data: IP address, browser type, device information</li>
                <li>Usage Data: information about how you use our website</li>
                <li>Marketing Data: your preferences in receiving marketing from us</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
              <p className="mb-4">We use your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To send you marketing communications (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">Under data protection laws, you have rights including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure of your personal data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;