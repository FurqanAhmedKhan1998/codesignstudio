// import React, { useState, useEffect } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// const Slider = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [perPage, setPerPage] = useState(3); // Set the default value for larger screens

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [currentSlide, slides]);

//   const updatePerPage = () => {
//     // Update perPage based on screen width
//     setPerPage(window.innerWidth <= 600 ? 1 : 3);
//   };

//   useEffect(() => {
//     // Update perPage on mount and resize
//     updatePerPage();
//     window.addEventListener('resize', updatePerPage);
//     return () => {
//       window.removeEventListener('resize', updatePerPage);
//     };
//   }, []);

//   return (
//     <div className="relative p-10">
//       <Splide
//         options={{
//           type: 'loop',
//           perPage: perPage,
//           perMove: 1,
//           focus: 'center',
//           gap: '10px',
//           autoplay: true,
//           autoScroll: {
//             speed: 0.5,
//           },
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SplideSlide key={index}>
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </SplideSlide>
//         ))}
//       </Splide>
//     </div>
//   );
// };

// export default Slider;


import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, slides]);

  return (
    <div className="relative p-10 ">
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          focus: 'center',
          gap: '10px',
          autoplay: true, 
          // interval: 1500, 
          autoScroll: {
            speed: 0.5,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;


// import React, { useState, useEffect } from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// const Slider = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [currentSlide, slides]);

//   return (
//     <div className="relative p-10">
//       <Splide
//         options={{
//           type: 'loop',
//           perPage: 3,
//           perMove: 1,
//           focus: 'center',
//           gap: '10px',
//           autoplay: true, 
//           // interval: 1500, 
//           autoScroll: {
//             speed: 0.5,
//           },
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SplideSlide key={index}>
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </SplideSlide>
//         ))}
//       </Splide>
//     </div>
//   );
// };

// export default Slider;
