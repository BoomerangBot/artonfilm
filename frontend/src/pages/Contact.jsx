import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjects = [
    'Founding Patron 2025',
    'Corporate Partnership 2025',
    'Embassy / Institute Support',
    'Press / Media Inquiry',
    'General Inquiry'
  ];

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Message Sent!", {
      description: "Thank you for your inquiry. We'll respond within 48 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header - More Artistic */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageCircle size={40} className="text-black" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
            Get Involved
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities, patron membership, or media inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-amber-500/20 text-center">
            <Mail size={32} className="text-amber-400 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Email us directly at</p>
            <a
              href="mailto:rh@artonfilm.uk"
              className="text-2xl md:text-3xl font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              rh@artonfilm.uk
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form - More Artistic */}
      <section className="py-16 pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3 font-serif">Send Us a Message</h2>
              <p className="text-gray-400">We typically respond within 48 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-gray-300">
                  Inquiry Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white"
                >
                  <option value="" className="bg-zinc-900">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-zinc-900">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all text-white resize-none placeholder-gray-500"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-500/20"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;