import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeNavMenu, setActiveNavMenu] = useState(false);

  const toggleMenu = () => {
    setActiveNavMenu((prev) => !prev);
  };

  return (
    <nav className="bg-black fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          TEST<span className="text-amber-500">BARBER</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "services", "barbers", "gallery", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-amber-500 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {activeNavMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {activeNavMenu && (
        <div className="md:hidden bg-gray-900 px-4 pb-4">
          <div className="flex flex-col space-y-4">
            {["home", "about", "services", "barbers", "gallery", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-amber-500 transition-colors"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
