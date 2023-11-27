import React from "react";
import AboutBanner from "../../assets/AboutBanner.jpg";
import '../fontstyle.css';

const AboutUs = () => {
  return (
    <div className="container mx-auto pt-20 md:grid md:grid-cols-2 md:gap-8 p-4 md:p-16">
      <div className="md:order-2">
        <img src={AboutBanner} alt="Studio" className="h-90 w-90 mx-auto mb-4" />
      </div>
      <div className="md:order-1 mx-4 md:mx-0">
        <h1 className="text-4xl md:text-6xl font-semibold text-orange-500 mb-4 md:mb-10" style={{ fontFamily: 'Mostin-Black' }}>
          WELCOME TO CODESIGN STUDIO
        </h1>
        <p className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-8" style={{ fontFamily: 'MostinLight-jEJWO' }}>
          YOUR TRUSTED PHOTOGRAPHY PARTNER
        </p>
        <hr className="border-t border-orange-500 my-4 md:my-8 mb-6 md:mb-10" />
        <p className="text-base md:text-lg text-white mb-4 md:mb-8" style={{ fontFamily: 'MostinThin-x3pxV' }}>
          At CODESIGN STUDIO, we are passionate about photography and dedicated
          to capturing life's most precious moments. Our studio specializes in a
          wide range of photography services, including weddings, family
          portraits, engagement sessions, and event photography.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;




// import React from "react";
// import AboutBanner from "../../assets/AboutBanner.jpg";
// import '../fontstyle.css';

// const AboutUs = () => {
//   return (
//     <div className="container mx-auto  md:grid md:grid-cols-2 md:gap-8 pt-16 p-16">
//       <div className="md:order-2">
//         <img src={AboutBanner} alt="Studio" className=" h-90 w-90 mx-4 mb-4" />
//       </div>
//       <div className="md:order-1">
//         <h1 className="text-6xl font-semibold text-orange-500 mb-10" style={{ fontFamily: 'Mostin-Black' }}>
//           WELCOME TO CODESIGN STUDIO
//         </h1>
//         <p className="text-2xl font-semibold text-white mb-8" style={{ fontFamily: 'MostinLight-jEJWO' }}>
//           YOUR TRUSTED PHOTOGRAPHY PARTNER
//         </p>
//         <hr className="border-t border-orange-500 my-8 mb-10" />
//         <p className="text-lg text-white mb-8"  style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           At CODESIGN STUDIO, we are passionate about photography and dedicated
//           to capturing life's most precious moments. Our studio specializes in a
//           wide range of photography services, including weddings, family
//           portraits, engagement sessions, and event photography.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
