import React from "react";
import Logo from "../assets/CDS 1 (2).png";
import './fontstyle.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start">
        <div className="sm:flex">
          <div className="mt-4 sm:w-1/2 sm:pr-4">
            <h4 className="text-xl text-orange-500 font-semibold" style={{ fontFamily: 'Mostin-Black' }}>
              Quick Links
            </h4>
            <ul className="mt-2" style={{ fontFamily: 'MostinLight-jEJWO' }}>
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-orange-500">
                  Portfolio
                </a>
              </li>
              {/* <li>
                <a href="/pricing" className="hover:text-orange-500">
                  Pricing
                </a>
              </li> */}
              <li>
                <a href="/about" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:w-1/2 sm:pl-4">
            <h4 className="text-xl font-semibold text-orange-500" style={{ fontFamily: 'Mostin-Black' }}>
              Contact Us
            </h4>
            <p className="mt-2" style={{ fontFamily: 'MostinLight-jEJWO' }}>Email: info@codesignservices.com</p>
            <p style={{ fontFamily: 'MostinLight-jEJWO' }}>+1 859 203-3645</p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-xl font-semibold text-orange-500" style={{ fontFamily: 'Mostin-Black' }}>Mission</p>
          <p className="mt-2" style={{ fontFamily: 'MostinLight-jEJWO' }}>Provide quality and excellence to our clients.</p>
        </div>
        <div className="mt-4 flex items-center">
          <img src={Logo} alt="Logo" className="h-26 w-32" />
          {/* <span className="ml-2 text-xl font-semibold">CODESIGN STUDIO</span> */}
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm" style={{ fontFamily: 'MostinLight-jEJWO' }}>Copyright © 2023, CODESIGN</p>
      </div>
    </footer>
  );
};

export default Footer;
