import React from "react";
import { FaCamera } from "react-icons/fa";
import CameraMan from "../../assets/Untitled-1.gif";
import '../fontstyle.css';

function PhotographyWebsite() {
  
  return (
    <div className="bg-black text-white container mx-auto pt-10  md:grid md:grid-cols-2 md:gap-8 p-4 md:p-16">
      <div className="md:order-1"> 
          <img
            src={CameraMan}
            
            className="  h-90 w-90 mx-auto mb-8"
          />
      </div>
      <div className="md:order-2 mx-4 md:mx-0 ">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-orange-500" style={{ fontFamily: 'Mostin-Black' }}>
          WELCOME TO CODESIGN STUDIO
        </h1>
        <div className="text-4xl lg:text-5xl  mb-4" style={{ fontFamily: 'MostinLight-jEJWO' }}>
          Capturing Moments, Creating Memories
        </div>

        <p className="text-lg mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
          We specialize in landscape, portrait, videos, product photography, and
          event photography.
        </p>
        <p className="text-lg mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
          Explore our best work and feel free to get in touch for inquiries or
          photoshoot scheduling.
        </p>
        <a className="explore-button bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full" style={{ fontFamily: 'MostinThin-x3pxV' }} href="/portfolio">
          Explore Our Work
        </a>
      </div>
      
    </div>
  );
}

export default PhotographyWebsite;






// import React from "react";
// import { FaCamera } from "react-icons/fa";
// import CameraMan from "../../assets/Untitled-1.gif";
// import '../fontstyle.css';

// function PhotographyWebsite() {
//   return (
//     <div className="bg-black text-white py-16 flex flex-col lg:flex-row p-20 pt-20 pb-40 ">
//       <div className="w-full lg:w-2/3 relative">
//         <div className="absolute top-1/2 left-60 transform -translate-x-1/2 -translate-y-1/2 ">
          
//           <img
//             src={CameraMan}
            
//             className="w-full h-80 object-cover"
//           />
//         </div>
//       </div>
//       <div className="w-full lg:w-4/5 ">
//         <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-orange-500" style={{ fontFamily: 'Mostin-Black' }}>
//           WELCOME TO CODESIGN STUDIO
//         </h1>
//         <div className="text-4xl lg:text-5xl  mb-4" style={{ fontFamily: 'MostinLight-jEJWO' }}>
//           Capturing Moments, Creating Memories
//         </div>

//         <p className="text-lg mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           We specialize in landscape, portrait, videos, product photography, and
//           event photography.
//         </p>
//         <p className="text-lg mb-4" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           Explore our best work and feel free to get in touch for inquiries or
//           photoshoot scheduling.
//         </p>
//         <button className="explore-button bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           Explore Our Work
//         </button>
//       </div>
      
//     </div>
//   );
// }

// export default PhotographyWebsite;

