import React, { useRef, useEffect, useState } from 'react';
import ProductVideo from "../../assets/video/Product Video.MOV";
import './portfolioGrid.css';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../fontstyle.css';
import { FaArrowRight } from "react-icons/fa";

const ProductShowcase = () => {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const navigate = useNavigate();
  const [shouldOverlap, setShouldOverlap] = useState(false);

  const handleClick = () => {
    setShouldOverlap(!shouldOverlap);
    navigate('/productPhotography');
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
    <div className='mt-8 md:mt-40 pb-5'>
      <div className={`flex flex-row md:flex-row p-4 md:p-8 justify-center showcase sm:flex-row md:flex-row`} ref={ref}>
        <div className="p-4 md:p-5">
          <div className="animated-heading-container mt-4 sm:mt-2 md:mt-10 lg:mt-40" style={{ fontFamily: 'Mostin-Black' }}>
            <h2 className={`text-xs sm:text-xs md:text-4xl lg:text-5xl mb-2 text-orange-500 animated-heading ${inView ? 'slide-in-heading' : ''}`} ref={headingRef}>
            Product Photography
            </h2>
          </div>
        </div>
        <div className="white-container sm:w-full sm:h-auto md:w-full md:h-auto lg:w-full lg:h-auto">
          <div className={` ${inView ? 'slide-in-video' : ''}`}>
            <video
              ref={videoRef}
              src={ProductVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
            />
          </div>
        </div> 
         <div className={"bg-white sm:p-1 md:p-6 lg:p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
          <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-10 sm:mt-10 md:mt-10 lg:mt-12 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''}`}>
          Product
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

export default ProductShowcase;


// import React, { useRef, useEffect } from 'react';
// import ProductVideo from "../../assets/video/Product Video.MOV";
// import './productShowcase.css';
// import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import { FaArrowRight } from "react-icons/fa";
// import '../fontstyle.css';

// const ProductShowcase = () => {
//   const videoRef = useRef(null);
//   const headingRef = useRef(null);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/productPhotography');
//   };

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     const video = videoRef.current;

//     if (inView) {
//       video.play();
//       if (headingRef.current) {
//         headingRef.current.classList.add('animated-productheading');
//       }
//     } else {
//       video.pause();
//       if (headingRef.current) {
//         headingRef.current.classList.remove('animated-productheading');
//       }
//     }
//   }, [inView]);

//   return (
//     <div className='mt-40 pb-20'>
//       <div className={`flex p-8 justify-center showcase `} ref={ref}>  
//         <div className="p-5">
//           <div className="animated-productheading-container mt-40" style={{ fontFamily: 'Mostin-Black' }}>
//             <h2 className={`text-4xl  mb-2 text-orange-500 animated-productheading ${inView ? 'slide-in-productheading' : ''}`} ref={headingRef}>Product Photography</h2>
//           </div>
//         </div>
        

//         <div className="white-productcontainer">
//           <div className={` ${inView ? 'slide-in-productvideo' : ''}`}>
//             <video
//               ref={videoRef}
//               src={ProductVideo}
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//             />
//           </div>
//         </div>
//         <div className={"bg-white p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500 font-most"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
//           <h2 className="text-lg font-lg whitespace-pre-line mt-20 transform rotate-90">
//             Product
//           </h2>
//           <h2 className="text-lg font-lg whitespace-pre-line mt-12 transform rotate-90">
//             Photography
//           </h2>
//         </div>
       
//       </div>
//       <div className='flex justify-center '  style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           <h1 className='text-orange-500 text-lg' onClick={handleClick}>See More</h1>
//           <FaArrowRight className='text-orange-500 text-2xl pl-2' onClick={handleClick}/>
//         </div>
//     </div>
//   );
// };

// export default ProductShowcase;







// import React, { useRef, useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import ProductVideo from "../../assets/video/Product Video.MOV";
// import './productShowcase.css';
// import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';

// const ProductShowcase = () => {
//   const videoRef = useRef(null);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/productPhotography');
//   };

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     const video = videoRef.current;

//     const handleCanPlay = () => {
//       video.play();
//     };

//     const handleVideoEnd = () => {
//       video.play();
//     };

//     video.addEventListener("canplay", handleCanPlay);
//     video.addEventListener("ended", handleVideoEnd);

   
//     return () => {
//       video.removeEventListener("canplay", handleCanPlay);
//       video.removeEventListener("ended", handleVideoEnd);
//     };
//   }, []); 

//   useEffect(() => {
//     if (inView) {
//       setShowAnimation(true);
//     }
//   }, [inView]);

//   const headingAnimation = useSpring({
//     opacity: showAnimation ? 1 : 0,
//     transform: showAnimation ? 'translateX(0)' : 'translateX(-150%)',
//   });

//   const videoAnimation = useSpring({
//     transform: showAnimation ? 'translateX(0)' : 'translateX(100%)',
//   });

//   return (
//     <div className="flex p-8 justify-center pb-20 " ref={ref}>
//       <div className="p-5">
//         <div className="animated-productheading-container mt-40">
//           <animated.h2 className={`text-4xl font-bold mb-2 text-orange-500 animated-productheading`} style={headingAnimation}>
//             Product Photography
//           </animated.h2>
//         </div>
//       </div>

//       <div className="white-productcontainer">
//         <animated.div className={`slide-in-productvideo`} style={videoAnimation}>
//           <video
//             ref={videoRef}
//             src={ProductVideo}
//             className="w-full h-full object-cover"
//             muted
//             autoPlay
//             loop
//           />
//         </animated.div>
//       </div>

//       <div className={"bg-white p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} onClick={handleClick}>
//         <h2 className="text-lg font-semibold whitespace-pre-line mt-20 transform rotate-90">
//           Product
//         </h2>
//         <h2 className="text-lg font-semibold whitespace-pre-line mt-12 transform rotate-90">
//           Photography
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;
