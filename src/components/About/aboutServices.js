import React, { useState, useEffect } from "react";
import { FaCamera, FaPortrait, FaCameraRetro, FaImage } from "react-icons/fa";
import '../fontstyle.css';

const services = [
  {
    title: "Street Photography",
    description:
      "Capture the magic of your special day with our professional wedding photography services.",
    icon: <FaCamera />,
  },
  {
    title: "Model Photography",
    description:
      "Preserve the warmth and togetherness of your family with our family portrait sessions.",
    icon: <FaPortrait />,
  },
  {
    title: "Event Photography",
    description:
      "Document your events and celebrations with our expert event photographers.",
    icon: <FaCameraRetro />,
  },
  {
    title: "Product Photography",
    description:
      "Showcase your products in the best light with our professional product photography services.",
    icon: <FaImage />,
  },
];

const AboutServices = () => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setTimeout(() => {
        setInitialRender(false);
      }, 1000);
    }
  }, [initialRender]);

  return (
    <div className="p-8 md:p-16 lg:p-28 bg-black">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500 text-center mb-4 md:mb-6" style={{ fontFamily: 'Mostin-Black' }}>
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 border border-orange-500 rounded-lg text-center ${
              !initialRender
                ? "transition-opacity duration-500 transform translate-x-0 opacity-100 hover:shadow-md"
                : "opacity-0 translate-x-16"
            }`}
            style={{
              transitionDelay: `${index * 0.9}s`,
            }}
          >
            <div className="flex justify-center mb-2">
              <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-orange-500 pr-2">{service.icon}</p>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold text-orange-500" style={{ fontFamily: 'Mostin-Black' }}>
                {service.title}
              </h3>
            </div>
            <p className="text-sm md:text-base lg:text-lg xl:text-lg text-white" style={{ fontFamily: 'MostinThin-x3pxV' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutServices;







// import React , { useState, useEffect } from "react";
// import {
//   FaCamera,
//   FaPortrait,
//   FaHeart,
//   FaCameraRetro,
//   FaBuilding,
//   FaImage,
//   FaEdit,
// } from "react-icons/fa";
// import '../fontstyle.css';

// const services = [
//   {
//     title: "Street Photography",
//     description:
//       "Capture the magic of your special day with our professional wedding photography services.",
//     icon: <FaCamera />,
//   },
//   {
//     title: "Model Photography",
//     description:
//       "Preserve the warmth and togetherness of your family with our family portrait sessions.",
//     icon: <FaPortrait />,
//   },
  
//   {
//     title: "Event Photography",
//     description:
//       "Document your events and celebrations with our expert event photographers.",
//     icon: <FaCameraRetro />,
//   },
 
//   {
//     title: "Product Photography",
//     description:
//       "Showcase your products in the best light with our professional product photography services.",
//     icon: <FaImage />,
//   },
  
// ];

// const AboutServices = () => {
//   const [showServices, setShowServices] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowServices(true);
//     }, 1000);
//   }, []);

//   return (
//     <div className="p-28 bg-black">
//       <h2 className="text-6xl font-semibold text-orange-500 text-center mb-8" style={{ fontFamily: 'Mostin-Black' }}>
//         Our Services
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`p-6 border border-orange-500 rounded-lg text-center ${
//               showServices
//                 ? "transition-opacity duration-500 transform translate-x-0 opacity-100 hover:shadow-md"
//                 : "opacity-0 translate-x-16"
//             }`}
//             style={{
//               transitionDelay: `${index * 0.6}s`,
//             }}
//           >
//             <div className="flex justify-center">
//             <p className="text-3xl text-orange-500 pr-2" >{service.icon}</p>
//             <h3 className="text-2xl font-semibold text-orange-500 mb-2" style={{ fontFamily: 'Mostin-Black' }}>
//               {service.title}
//             </h3>
//             </div>
//             <p className="text-white" style={{ fontFamily: 'MostinThin-x3pxV' }}>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutServices;

