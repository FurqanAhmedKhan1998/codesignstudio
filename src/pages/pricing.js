import React from "react";
import "font-awesome/css/font-awesome.min.css";
import PricingBanner from "../components/Pricing/pricingBanner";
import PricingGrid from "../components/Pricing/pricingGrid";
// import PricingIntro from "../components/Pricing/pricingIntro";
// import PricingShow from "../components/Pricing/pricingShow";
// import PricingTag from "../components/Pricing/pricingTag";

const Pricing = () => {
  return (
    <div className="w-full bg-black">
      <PricingBanner />
      <PricingGrid />
      {/* <PricingBanner />
      <PricingIntro />
      <PricingShow /> */}

      {/* <PricingTag /> */}
    </div>
  );
};

export default Pricing;
