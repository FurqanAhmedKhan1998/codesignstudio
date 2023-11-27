import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/CDS 1 (2).png";
import './fontstyle.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black text-white transition-all duration-300 py-2 px-2 md:px-24 flex flex-wrap md:flex-nowrap justify-between items-center ${
        isSticky ? "bg-black text-white sticky top-0 z-50" : ""
      }`} style={{ fontFamily: 'MostinLight-jEJWO' }}
    >
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-26 w-32" />
        {/* <span className="ml-2 text-xl font-semibold">CODESIGN STUDIO</span> */}
      </div>

      <div className="md:hidden ml-4">
        <div
          onClick={toggleMobileMenu}
          className="text-white hover:text-orange-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 fill-current" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>
            <div className="relative group">
              <a href="/portfolio" className="hover:text-orange-500">
                Portfolio
              </a>
            </div>
            {/* <a href="/pricing" className="hover:text-orange-500">
              Pricing
            </a> */}
            <a href="/about" className="hover:text-orange-500">
              About
            </a>
            <a href="/contact" className="hover:text-orange-500">
              Contact
            </a>
          </nav>
        </div>
      )}

      <nav
        className={`md:flex md:space-x-6 hidden ${
          isMobileMenuOpen ? "" : "md:block"
        }`}
      >
        <a href="/" className="hover:text-orange-500">
          Home
        </a>
        <div className="relative group">
          <a href="/portfolio" className="hover:text-orange-500">
            Portfolio
          </a>
        </div>
        {/* <a href="/pricing" className="hover:text-orange-500">
          Pricing
        </a> */}
        <a href="/about" className="hover:text-orange-500">
          About
        </a>
        <a href="/contact" className="hover:text-orange-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
