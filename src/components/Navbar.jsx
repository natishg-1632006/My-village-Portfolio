import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", targetId: "home" },
  { label: "About", href: "#about", targetId: "about" },
  { label: "Temples", href: "#temples", targetId: "temples" },
  { label: "Gallery", href: "#gallery", targetId: "gallery" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle background solid shift on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll-spy (highlighting active section)
  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Detect when section is in middle of viewport
      threshold: 0
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navItems.forEach((item) => {
      const el = document.getElementById(item.targetId);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    // 1. Close the mobile menu immediately so the header returns to its normal height
    setIsOpen(false);

    // 2. Delay the scroll calculation until the menu collapse has started/finished (300ms transition)
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Navbar height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(targetId);
      }
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-2.5 border-b border-primary-green/5"
          : "bg-black/10 backdrop-blur-xs py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <img 
              src="/logo.png" 
              alt="Namma Thathaiyangarpatti Logo" 
              className="w-10 h-10 object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <span
              className={`font-serif font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary-green" : "text-white"
              }`}
            >
              Namma <span className="text-secondary-saffron">Thathaiyangarpatti</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 relative z-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <a
                  key={item.targetId}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.targetId)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative ${
                    isActive
                      ? isScrolled
                        ? "text-primary-green font-semibold"
                        : "text-secondary-saffron font-semibold"
                      : isScrolled
                      ? "text-text-dark hover:text-primary-green"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavbarBg"
                      className={`absolute inset-0 rounded-full -z-10 border ${
                        isScrolled ? "bg-primary-green/10 border-primary-green/10" : "bg-white/20 border-white/10"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                isScrolled
                  ? "text-primary-green hover:bg-primary-green/5 focus:ring-primary-green"
                  : "text-white hover:bg-white/10 focus:ring-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-inner overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.targetId;
                return (
                  <a
                    key={item.targetId}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.targetId)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "text-primary-green bg-primary-green/5 border-l-4 border-secondary-saffron"
                        : "text-text-dark hover:text-primary-green hover:bg-gray-50/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
