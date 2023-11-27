import React from "react";
import Logo from "../../assets/110.png";
import '../fontstyle.css';

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-6 md:space-y-0 p-4 pb-16">
      <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start">
        <img
          src={Logo}
          alt="Contact Image"
          className="w-64 h-64 md:w-96 md:h-96"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4 md:pl-16">
        <h1 className="text-orange-500 text-2xl font-extrabold mb-4 text-center md:text-left" style={{ fontFamily: 'Mostin-Black' }}>
          Contact Us
        </h1>{" "}
        <form className="w-full">
          <div className="mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
            <label className="text-white font-semibold" htmlFor="name">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-1 border rounded-lg text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
            <label className="text-white font-semibold" htmlFor="email">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 border rounded-lg text-black"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
            <label className="text-white font-semibold" htmlFor="message">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-1 border rounded-lg text-black"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="text-center" style={{ fontFamily: 'MostinThin-x3pxV' }}>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;





