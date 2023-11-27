import React from "react";
import StoryBanner from "../../assets/Story.jpg";
import '../fontstyle.css';

const AboutStory = () => {
  return (
    <div className="container mx-auto pt-20 md:grid md:grid-cols-2 md:gap-8 p-4 md:p-16">
      <div className="md:order-1">
        <img
          src={StoryBanner}
          alt="Studio"
          className="h-90 w-90 mx-auto mb-4 "
        />
      </div>
      <div className="md:order-2 mx-4 md:mx-0">
        <h2 className="text-4xl md:text-6xl font-semibold text-orange-500 mb-6" style={{ fontFamily: 'Mostin-Black' }}>
          Our Story
        </h2>

        <p className="text-base md:text-lg text-white mb-2" style={{ fontFamily: 'MostinThin-x3pxV' }}>
          CODESIGN STUDIO was founded on the belief that every photograph is a
          work of art. Our journey started with a dream to create beautiful
          memories through our lenses. Over the years, we've grown into a
          close-knit team of talented photographers, each with a unique style
          and vision.
        </p>
        <hr className="border-t border-orange-500 my-6" />
        <p className="text-base md:text-lg text-white " style={{ fontFamily: 'MostinThin-x3pxV' }}>
          We've had the privilege of capturing countless weddings, family
          reunions, and special events. Our mission is to preserve your
          cherished memories with the utmost care and creativity.
        </p>
      </div>
    </div>
  );
};

export default AboutStory;






// import React from "react";
// import StoryBanner from "../../assets/Story.jpg";
// import '../fontstyle.css';

// const AboutStory = () => {
//   return (
//     <div className="container mx-auto pt-20  md:grid md:grid-cols-2 md:gap-8 p-16">
//       <div className="md:order-1">
//         <img
//           src={StoryBanner}
//           alt="Studio"
//           className="h-90 w-90 mx-auto mb-4 "
//         />
//       </div>
//       <div className="md:order-2 mx-4">
//         <h2 className="text-6xl font-semibold text-orange-500 mb-6" style={{ fontFamily: 'Mostin-Black' }}>
//           Our Story
//         </h2>

//         <p className="text-lg text-white mb-2"  style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           CODESIGN STUDIO was founded on the belief that every photograph is a
//           work of art. Our journey started with a dream to create beautiful
//           memories through our lenses. Over the years, we've grown into a
//           close-knit team of talented photographers, each with a unique style
//           and vision.
//         </p>
//         <hr className="border-t border-orange-500 my-6" />
//         <p className="text-lg text-white "  style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           We've had the privilege of capturing countless weddings, family
//           reunions, and special events. Our mission is to preserve your
//           cherished memories with the utmost care and creativity.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutStory;
