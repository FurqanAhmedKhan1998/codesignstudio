import React from "react";
import AboutBanner from "../components/About/aboutBanner";
import AboutStory from "../components/About/aboutStory";
import AboutServices from "../components/About/aboutServices";
// import AboutBanner from "../components/About/aboutBanner";
// import AboutCreative from "../components/About/aboutCreative";
// import AboutContent from "../components/About/aboutContent";
// import EventGrid from "../components/About/aboutEvent";

const AboutUs = () => {
  return (
    <div className="w-full bg-black">
      <AboutBanner />
      <AboutStory />
      <AboutServices />
      {/* <AboutBanner />
      <AboutCreative />
      <AboutContent />
      <EventGrid heading="Our Events" images={imageArray} /> */}
    </div>
  );
};

export default AboutUs;
