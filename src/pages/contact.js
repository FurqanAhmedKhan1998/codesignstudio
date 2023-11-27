import React from "react";
import ContactBanner from "../components/Contact/contactBanner";
import ContactForm from "../components/Contact/contactForm";

const ContactUs = () => {
  return (
    <div className="w-full bg-black">
      <ContactBanner />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
