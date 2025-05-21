import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-12">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              PMC<span className="text-amber-500">Barbershop</span>
            </h2>
            <p className="text-gray-400 mb-4">Classic cuts with modern style</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#1e293b] p-2 rounded-full hover:bg-amber-500 transition"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-[#1e293b] p-2 rounded-full hover:bg-amber-500 transition"
              >
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white no-underline">Home</a></li>
              <li><a href="#about" className="hover:text-white no-underline">About</a></li>
              <li><a href="#services" className="hover:text-white no-underline">Services</a></li>
              <li><a href="#gallery" className="hover:text-white no-underline">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white no-underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              📍 Near Indian institute of information technology Una
            </p>
            <p className="text-gray-400">📞 +919999999999</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="text"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2025 Yaswant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
