import React from 'react';
import HomeBg from "../../assets/homeBg.jpg";
import '../fontstyle.css';

const VideoPhotographyComponent = () => {
  return (
    <div className="relative overflow-hidden shadow-md">
      <img src={HomeBg} alt="Editing Studio" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl inset-0 p-4 md:p-8 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Videography & Photography Services</h1>
        <p className="text-white text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg mb-6 md:mb-12" style={{ fontFamily: 'MostinThin-x3pxV' }}>
          Welcome to our world of visual storytelling! With a team of passionate professionals, we bring your moments to life through the lens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h2 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Our Expertise</h2>
            <ul className="list-disc list-inside text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm" style={{ fontFamily: 'MostinThin-x3pxV' }}>
              <li className="mr-2">Cinematic Videography</li>
              <li className="mr-1 pr-1">Creative Photography</li>
              <li className="mr-10 pr-2">Event Coverage</li>
              <li className="mr-16 pr-1">Drone Shots</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Meet Our Team</h2>
            <p className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm" style={{ fontFamily: 'MostinThin-x3pxV' }}>
              We take pride in our experienced and creative team dedicated to capturing every moment with precision and artistry.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-8">
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Custom Editing</h2>
          <p className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm" style={{ fontFamily: 'MostinThin-x3pxV' }}>
            Our in-house editing team ensures that each project gets the personalized touch it deserves. From color correction to seamless transitions, we've got it covered.
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-8">
          <div className="ml-2 md:ml-4">
            <p className="text-orange-500 font-semibold text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl mb-2 md:mb-4" style={{ fontFamily: 'Mostin-Black' }}>Editing Studio</p>
            <p className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm" style={{ fontFamily: 'MostinThin-x3pxV' }}>Crafting your stories with precision</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPhotographyComponent;



// import React from 'react';
// import HomeBg from "../../assets/homeBg.jpg";
// import '../fontstyle.css';

// const VideoPhotographyComponent = () => {
//   return (
//     <div className="relative overflow-hidden shadow-md">
//       <img src={HomeBg} alt="Editing Studio" className="w-full h-full object-cover" />  
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute text-xs sm:text-xs inset-0 p-4 md:p-8 flex flex-col justify-center items-center text-center text-white">
//         <h1 className="text-3xl text-xs sm:text-xs md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Videography & Photography Services</h1>
//         <p className="text-white text-xs sm:text-xs text-md md:text-lg lg:text-lg mb-6 md:mb-12" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           Welcome to our world of visual storytelling! With a team of passionate professionals, we bring your moments to life through the lens.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//           <div>
//             <h2 className="text-lg  text-xs sm:text-xs md:text-xl lg:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Our Expertise</h2>
//             <ul className="list-disc list-inside text-white text-md md:text-lg lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//               <li className="mr-2">Cinematic Videography</li>
//               <li className="mr-1 pr-1">Creative Photography</li>
//               <li className="mr-10 pr-1">Event Coverage</li>
//               <li className="mr-16 pl-2">Drone Shots</li>
//             </ul>
//           </div>        
//           <div>
//             <h2 className="text-lg text-xs sm:text-xs md:text-xl lg:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Meet Our Team</h2>
//             <p className="text-white text-xs sm:text-xs text-md md:text-lg lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//               We take pride in our experienced and creative team dedicated to capturing every moment with precision and artistry.
//             </p>
//           </div>
//         </div>
//         <div className="mt-6 md:mt-8">
//           <h2 className="text-lg text-xs sm:text-xs md:text-xl lg:text-2xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Custom Editing</h2>
//           <p className="text-white  text-xs sm:text-xs text-md md:text-lg lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//             Our in-house editing team ensures that each project gets the personalized touch it deserves. From color correction to seamless transitions, we've got it covered.
//           </p>
//         </div>
//         <div className="flex items-center justify-center mt-6 md:mt-8"> 
//           <div className="ml-2 md:ml-4">
//             <p className="text-orange-500 font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-4" style={{ fontFamily: 'Mostin-Black' }}>Editing Studio</p>
//             <p className="text-white text-xs sm:text-xs text-md md:text-lg lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>Crafting your stories with precision</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPhotographyComponent;



// import React from 'react';
// import HomeBg from "../../assets/homeBg.jpg";
// import '../fontstyle.css';

// const VideoPhotographyComponent = () => {
//   return (
//     <div className="relative overflow-hidden shadow-md">
//       <img src={HomeBg} alt="Editing Studio" className="w-full h-full object-cover" />  
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center text-white">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Videography & Photography Services</h1>
//         <p className="text-white text-lg md:text-base lg:text-lg mb-12" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           Welcome to our world of visual storytelling! With a team of passionate professionals, we bring your moments to life through the lens.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Our Expertise</h2>
//             <ul className="list-disc list-inside text-white text-lg md:text-base lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//               <li className="mr-2">Cinematic Videography</li>
//               <li className="mr-1 pr-1">Creative Photography</li>
//               <li className="mr-14 pr-1">Event Coverage</li>
//               <li className="mr-24 pl-3">Drone Shots</li>
//             </ul>
//           </div>        
//           <div>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Meet Our Team</h2>
//             <p className="text-white text-lg md:text-base lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//               We take pride in our experienced and creative team <br /> dedicated to capturing every moment with precision and artistry.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Custom Editing</h2>
//           <p className="text-white text-lg md:text-base lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//             Our in-house editing team ensures that each project gets the personalized touch it deserves.<br />
//             From color correction to seamless transitions, we've got it covered.
//           </p>
//         </div>
//         <div className="flex items-center justify-center mt-8"> 
//           <div className="ml-4">
//             <p className="text-orange-500 font-semibold text-2xl md:text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Mostin-Black' }}>Editing Studio</p>
//             <p className="text-white text-xs sm:text-xs text-lg md:text-base lg:text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>Crafting your stories with precision</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPhotographyComponent;






// import React from 'react';
// import HomeBg from "../../assets/homeBg.jpg";
// import '../fontstyle.css';

// const VideoPhotographyComponent = () => {
//   return (
//     <div className="relative  overflow-hidden shadow-md">
//       <img src={HomeBg} alt="Editing Studio" className="w-full h-full object-cover" />  
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center text-white">
//         <h1 className="text-6xl font-bold text-orange-500 mb-4"  style={{ fontFamily: 'Mostin-Black' }}>Videography & Photography Services</h1>
//         <p className="text-white text-lg mb-12" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           Welcome to our world of visual storytelling! With a team of passionate professionals, we bring your moments to life through the lens.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-3xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Our Expertise</h2>
//           <ul className="list-disc list-inside text-white text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//             <li className="mr-2">Cinematic Videography</li>
//             <li className="mr-1 pr-1">Creative Photography</li>
//             <li className="mr-14 pr-1">Event Coverage</li>
//             <li className="mr-24 pl-3">Drone Shots</li>
//           </ul>
//         </div>        
//           <div>
//             <h2 className="text-3xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Meet Our Team</h2>
//             <p className="text-white text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//               We take pride in our experienced and creative team <br /> dedicated to capturing every moment with precision and artistry.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-3xl font-semibold text-orange-500 mb-4" style={{ fontFamily: 'Mostin-Black' }}>Custom Editing</h2>
//           <p className="text-white text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>
//             Our in-house editing team ensures that each project gets the personalized touch it deserves.<br />
//              From color correction to seamless transitions, we've got it covered.
//           </p>
//         </div>
//         <div className="flex items-center justify-center mt-8"> 
//           <div className="ml-4">
//             <p className="text-orange-500 font-semibold text-3xl mb-4" style={{ fontFamily: 'Mostin-Black' }}>Editing Studio</p>
//             <p className="text-white text-lg" style={{ fontFamily: 'MostinThin-x3pxV' }}>Crafting your stories with precision</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPhotographyComponent;















// import React, { useRef } from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import AboutBanner from "../assets/AboutBanner.jpg";
// import Story from "../../assets/Story.jpg";
// import image from "../../assets/img.jpg";
// import image1 from "../../assets/img1.jpg";
// import image2 from "../../assets/img2.jpg";
// import image3 from "../../assets/img3.jpg";
// import image4 from "../../assets/img4.jpg";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const HomeShowCase = () => {
//   const images = [
//     AboutBanner, Story, image, image1, image3, image2, image4
//   ];

//   const swiperRef = useRef(null);

//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="md:order-2">
//           <Swiper
//             ref={swiperRef}
//             navigation
//             pagination
//             autoplay={{ delay: 3000 }}
//             className="relative h-96"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img src={image.url} alt={image.title} className="w-full h-96 object-cover" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="md:order-1">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {images.map((image, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src={image.url}
//                   alt={image.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-gray-800">{image.title}</h2>
//                   <p className="text-gray-600">{image.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeShowCase;
