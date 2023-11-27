import React, { useRef, useEffect, useState } from 'react';
import FoodVideo from "../../assets/video/Food Video.MOV";
import './portfolioGrid.css';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../fontstyle.css';
import { FaArrowRight } from "react-icons/fa";

const FoodShowcase = () => {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const navigate = useNavigate();
  const [shouldOverlap, setShouldOverlap] = useState(false);

  const handleClick = () => {
    setShouldOverlap(!shouldOverlap);
    navigate('/foodPhotography');
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const video = videoRef.current;

    if (inView) {
      video.play();
      if (headingRef.current) {
        headingRef.current.classList.add('animated-heading');
      }
    } else {
      video.pause();
      if (headingRef.current) {
        headingRef.current.classList.remove('animated-heading');
      }
    }
  }, [inView]);

  return (
    <div className='mb-8 md:mb-40'>
      <div className={`flex flex-row md:flex-row p-4 md:p-8 justify-center showcase sm:flex-row md:flex-row`} ref={ref}>
        <div className="p-4 md:p-5">
          <div className="animated-heading-container mt-4 sm:mt-2 md:mt-10 lg:mt-40" style={{ fontFamily: 'Mostin-Black' }}>
            <h2 className={`text-xs sm:text-xs md:text-4xl lg:text-5xl mb-2 text-orange-500 animated-heading ${inView ? 'slide-in-heading' : ''}`} ref={headingRef}>
            Food Photography
            </h2>
          </div>
        </div>
        <div className="white-container sm:w-full sm:h-auto md:w-full md:h-auto lg:w-full lg:h-auto">
          <div className={` ${inView ? 'slide-in-video' : ''}`}>
            <video
              ref={videoRef}
              src={FoodVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
            />
          </div>
        </div> 
         <div className={"bg-white sm:p-1 md:p-6 lg:p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
          <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-10 sm:mt-10 md:mt-10 lg:mt-12 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''}`}>
          Food
          </h2>
          <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-2 sm:mt-4 md:mt-6 lg:mt-8 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''} hidden md:block lg:block`}>
            Photography
          </h2>
        </div>
      </div>
      <div className='flex flex-row sm:flex-row md:flex-row justify-center sm:flex-row md:flex-row' style={{ fontFamily: 'MostinThin-x3pxV' }}>
        <h1 className='text-orange-500 text-xs sm:text-xs md:text-lg lg:text-lg  mb-2 md:mb-0 cursor-pointer' onClick={handleClick}>See More</h1>
        <FaArrowRight className='text-orange-500 text-xs sm:text-xs md:text-2xl md:pl-2  lg:text-lg cursor-pointer' onClick={handleClick}/>
      </div>
    </div>
  );
};

export default FoodShowcase;







// import React, { useRef, useEffect, useState } from 'react';
// import FoodVideo from "../../assets/video/Food Video.MOV";
// import './portfolioGrid.css';
// import { useNavigate } from 'react-router-dom'; 

// const FoodShowcase = () => {
//   const videoRef = useRef(null);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const navigate = useNavigate(); 

//   const handleClick = () => {
//     navigate('/foodPhotography');
//   };

//   useEffect(() => {
//     const video = videoRef.current;

//     video.addEventListener("canplay", () => {
//       video.play();
//     });

//     video.addEventListener("ended", () => {
//       video.play();
//     });

//     setTimeout(() => {
//       setShowAnimation(true);
//     }, 1000);
//   }, []);

//   return (
//     <div className="flex p-8 justify-center mb-20">
//       <div className="p-5">
//         <div className="animated-heading-container mt-40">
//            <h2 className={`text-4xl font-bold mb-2 text-orange-500 animated-heading ${showAnimation ? 'slide-in-heading' : ''}`}>Food Photography</h2>
//         </div>
//       </div>

//       <div className="white-container">
//         <div className={`slide-in-video ${showAnimation ? 'show' : ''}`}>
//           <video
//             ref={videoRef}
//             src={FoodVideo}
//             className="w-full h-full object-cover"
//             autoPlay
//             loop
//           />
//         </div>
//       </div>

//       <div className={"bg-white p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} onClick={handleClick}>
//         <h2 className="text-lg font-semibold whitespace-pre-line mt-20 transform rotate-90">
//           Food
//         </h2>
//         <h2 className="text-lg font-semibold whitespace-pre-line mt-7 transform rotate-90">
//           Photography
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default FoodShowcase;

