import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import '../fontstyle.css';

function ContactBanner() {
  return (
    <div className="bg-black text-center pb-6 pt-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
        <span className="inline-block" style={{ fontFamily: 'Mostin-Black' }}>
          HAVE SOME QUESTIONS
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-orange-500 ml-2"
          />
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:space-x-16 mb-8">
        <div className="mb-4 md:mb-0">
          <p className="text-orange-500 font-medium">
            <FontAwesomeIcon icon={faMapMarker} /> <strong style={{ fontFamily: 'Mostin-Black' }}>Address:</strong>
          </p>
          <p className="text-white pt-1" style={{ fontFamily: 'MostinLight-jEJWO' }}>
            212 N. 2nd St. STE 100, Richmond, KY 40475 Frankfort, Kentucky, USA
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-orange-500 font-medium">
            <FontAwesomeIcon icon={faEnvelope} /> <strong style={{ fontFamily: 'Mostin-Black' }}>Email:</strong>
          </p>
          <p className="text-white pt-1" style={{ fontFamily: 'MostinLight-jEJWO' }}>info@codesignservices.com</p>
        </div>
        <div>
          <p className="text-orange-500 font-medium">
            <FontAwesomeIcon icon={faPhone} /> <strong style={{ fontFamily: 'Mostin-Black' }}>Phone:</strong>
          </p>
          <p className="text-white pt-1" style={{ fontFamily: 'MostinLight-jEJWO' }}>+1 859 203-364</p>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;

