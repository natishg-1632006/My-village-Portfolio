import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1A0F] bg-radial from-[#102d18] via-[#0B1A0F] to-[#060f09] text-white relative overflow-hidden border-t border-[#1C3F24]/20">
      {/* Saffron Accent Border Line on Top */}
      <div className="h-1.5 bg-gradient-to-r from-primary-green via-secondary-saffron to-accent-red" />

      {/* Decorative background vectors */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="90" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="10" cy="10" r="30" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo / Icon */}
          <div className="bg-white/10 p-2 rounded-full border border-white/20 shadow-md">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          {/* Village Identity */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide">
              Namma <span className="text-secondary-saffron">Thathaiyangarpatti</span>
            </h2>
            <p className="text-gray-400 font-sans italic text-xs sm:text-sm tracking-widest uppercase">
              "Preserving Our Heritage, Celebrating Our Culture."
            </p>
          </div>

          {/* Instagram link with premium hover state */}
          <a
            href="https://www.instagram.com/namma_thathaiyangarpatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-secondary-saffron transition-all duration-300 text-sm font-sans transform hover:scale-[1.02] group"
          >
            <FaInstagram className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary-saffron after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-0.5">
              @namma_thathaiyangarpatti
            </span>
          </a>

          {/* Fading Separation Divider with Gold/Green/Gold gradients */}
          <div className="flex items-center justify-center space-x-2 w-full max-w-xs py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-secondary-saffron/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary-saffron/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-secondary-saffron/20" />
          </div>

          {/* Copyright details */}
          <div className="text-xs sm:text-sm text-gray-500 font-sans space-y-1">
            <p>© 2026 Namma Thathaiyangarpatti. All Rights Reserved.</p>
            <p className="pt-2 text-gray-400 font-medium flex items-center justify-center space-x-1.5">
              <span>Designed with ❤️ for our village.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
