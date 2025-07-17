import React, { useState, useEffect } from "react";
import logo from "../Assets/WhatsApp Image 2025-07-16 at 16.45.07.jpeg"; // Adjust path if needed

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;
      setScrolled(!atTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between transition-all duration-300
        ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg' : 'bg-transparent'}`}
    >
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo} alt="SMJ Logo" className="h-[40px] w-auto object-contain" />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-8 font-medium text-black">
                <li className="hover:text-[#11BAB2] cursor-pointer transition-colors duration-200 font-semibold">Home</li>
                <li className="hover:text-[#11BAB2] cursor-pointer transition-colors duration-200 font-semibold">Services</li>
                <li
                    className="relative cursor-pointer hover:text-[#11BAB2] transition-colors duration-200 font-semibold"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    About
                    {showDropdown && (
                        <ul className="absolute top-full left-0 mt-3 w-48 bg-white shadow-xl rounded-lg p-3 space-y-2 z-30 border border-gray-100">
                            <li className="hover:bg-[#11BAB2] hover:text-white p-2 rounded-md transition-colors duration-200 text-black cursor-pointer">Our Story</li>
                            <li className="hover:bg-[#11BAB2] hover:text-white p-2 rounded-md transition-colors duration-200 text-black cursor-pointer">Team</li>
                            <li className="hover:bg-[#11BAB2] hover:text-white p-2 rounded-md transition-colors duration-200 text-black cursor-pointer">Values</li>
                        </ul>
                    )}
                </li>
                <li className="hover:text-[#11BAB2] cursor-pointer transition-colors duration-200 font-semibold">Contact</li>
            </ul>

            {/* CTA Button */}
            <div className="flex items-center">
                <a
                    href="#contact"
                    className="bg-[#11BAB2] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-white hover:text-[#11BAB2] border border-transparent hover:border-[#11BAB2]"
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
