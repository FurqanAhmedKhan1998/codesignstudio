import React from "react";
import HomeBanner from "../components/Home/homeBanner";
import HomeSlider from "../components/Home/homeSlider";
import AboutBanner from "../assets/AboutBanner.jpg";
import Story from "../assets/Story.jpg";
import image from "../assets/img.jpg";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import HomeShowCase from "../components/Home/homeShowcase";
// import HomeIntroduction from "../components/Home/homeIntroduction";
// import HomeAgency from "../components/Home/homeAgency";
// import HomeTestimonial from "../components/Home/homeTestimonial";

const Home = () => {
  const slides = [AboutBanner, Story, image, image1, image3, image2, image4];
  return (
    <div className="w-full bg-black">
      <HomeBanner />
      <HomeSlider slides={slides} />
      <HomeShowCase />
      {/* <HomeIntroduction />
      <HomeAgency />
      <HomeTestimonial /> */}
    </div>
  );
};

export default Home;
