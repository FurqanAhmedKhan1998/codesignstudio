import React, { useRef, useEffect, useState } from 'react';
import StreetVideo from "../../assets/video/Street Video.MOV";
import './portfolioGrid.css';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../fontstyle.css';
import { FaArrowRight } from "react-icons/fa";

const StreetShowcase = () => {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const navigate = useNavigate();
  const [shouldOverlap, setShouldOverlap] = useState(false);

  const handleClick = () => {
    setShouldOverlap(!shouldOverlap);
    navigate('/streetPhotography');
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
              Street Photography
            </h2>
          </div>
        </div>
        <div className="white-container sm:w-full sm:h-auto md:w-full md:h-auto lg:w-full lg:h-auto">
          <div className={` ${inView ? 'slide-in-video' : ''}`}>
            <video
              ref={videoRef}
              src={StreetVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
            />
          </div>
        </div> 
         <div className={"bg-white sm:p-1 md:p-6 lg:p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
          <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-10 sm:mt-10 md:mt-10 lg:mt-12 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''}`}>
            Street
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

export default StreetShowcase;





// import React, { useRef, useEffect, useState } from 'react';
// import StreetVideo from "../../assets/video/Street Video.MOV";
// import './portfolioGrid.css';
// import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import '../fontstyle.css';
// import { FaArrowRight } from "react-icons/fa";

// const StreetShowcase = () => {
//   const videoRef = useRef(null);
//   const headingRef = useRef(null);
//   const navigate = useNavigate();
//   const [shouldOverlap, setShouldOverlap] = useState(false);
  
//   const handleClick = () => {
//     setShouldOverlap(!shouldOverlap);
//     navigate('/streetPhotography');
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
//         headingRef.current.classList.add('animated-heading');
//       }
//     } else {
//       video.pause();
//       if (headingRef.current) {
//         headingRef.current.classList.remove('animated-heading');
//       }
//     }
//   }, [inView]);

//   return (
//     <div className='mb-8 md:mb-40'>
//       <div className={`flex flex-row sm:flex-row md:flex-row p-4 md:p-8 justify-center showcase `} ref={ref}>
//         <div className="p-4 md:p-5">
//           <div className="animated-heading-container mt-4 sm:mt-2 md:mt-10 lg:mt-40" style={{ fontFamily: 'Mostin-Black' }}>
//             <h2 className={`text-xs sm:text-xs md:text-4xl lg:text-5xl mb-2 text-orange-500 animated-heading ${inView ? 'slide-in-heading' : ''}`} ref={headingRef}>
//               Street Photography
//             </h2>
//           </div>
//         </div>
//         <div className="white-container sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto">
//           <div className={` ${inView ? 'slide-in-video' : ''}`}>
//             <video
//               ref={videoRef}
//               src={StreetVideo}
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//             />
//           </div>
//         </div>    
//         <div className={"bg-white  sm:p-1 md:p-6 lg:p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
//           <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-12 sm:mt-12 md:mt-16 lg:mt-20 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''}`}>
//             Street
//           </h2>
//           <h2 className={`text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-2 sm:mt-8 md:mt-5 lg:mt-9 transform rotate-90 ${shouldOverlap ? 'overlapping-text' : ''} hidden md:block lg:block`}>
//             Photography
//           </h2>
//         </div>
//       </div>
//       <div className='flex flex-row sm:flex-row md:flex-row justify-center ' style={{ fontFamily: 'MostinThin-x3pxV' }}>
//         <h1 className='text-orange-500 text-xs sm:text-xs md:text-lg lg:text-lg  mb-2 md:mb-0 cursor-pointer' onClick={handleClick}>See More</h1>
//         <FaArrowRight className='text-orange-500 text-xs sm:text-xs md:text-2xl md:pl-2  lg:text-lg cursor-pointer' onClick={handleClick}/>
//       </div>
//     </div>
//   );
// };

// export default StreetShowcase;


// import React, { useRef, useEffect } from 'react';
// import StreetVideo from "../../assets/video/Street Video.MOV";
// import './portfolioGrid.css';
// import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import '../fontstyle.css';
// import { FaArrowRight } from "react-icons/fa";

// const StreetShowcase = () => {
//   const videoRef = useRef(null);
//   const headingRef = useRef(null);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/streetPhotography');
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
//         headingRef.current.classList.add('animated-heading');
//       }
//     } else {
//       video.pause();
//       if (headingRef.current) {
//         headingRef.current.classList.remove('animated-heading');
//       }
//     }
//   }, [inView]);

//   return (
//     <div className='mb-8 md:mb-40'>
//       <div className={`flex flex-row sm:flex-row md:flex-row p-4 md:p-8 justify-center showcase `} ref={ref}>
//         <div className="p-4 md:p-5">
//           <div className={`animated-heading-container mt-2 sm:mt-2 md:mt-4 hidden md:block lg:block`} style={{ fontFamily: 'Mostin-Black' }}>
//             <h2 className={`text-xs sm:text-xs md:text-4xl lg:text-5xl mb-2 text-orange-500 animated-heading ${inView ? 'slide-in-heading' : ''}`} ref={headingRef}>
//               Street Photography
//             </h2>
//           </div>
//         </div>
//         <div className="white-container sm:w-full md:w-auto lg:w-auto">
//           <div className={` ${inView ? 'slide-in-video' : ''}`}>
//             <video
//               ref={videoRef}
//               src={StreetVideo}
//               className="w-full h-auto sm:h-126 object-cover"
//               autoPlay
//               loop
//             />
//           </div>
//         </div>
//         <div className={"bg-white p-2 sm:p-2 md:p-6 lg:p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
//           <h2 className="text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-2 sm:mt-2 md:mt-16 lg:mt-20 transform rotate-90">
//             Street
//           </h2>
//           <h2 className="text-xs sm:text-xs md:text-base lg:text-lg whitespace-pre-line mt-2 sm:mt-8 md:mt-5 lg:mt-9 transform rotate-90">
//             Photography
//           </h2>
//         </div>
//       </div>
//       <div className='flex flex-row sm:flex-row md:flex-row justify-center ' style={{ fontFamily: 'MostinThin-x3pxV' }}>
//         <h1 className='text-orange-500 text-xs sm:text-xs md:text-lg mb-2 md:mb-0 cursor-pointer' onClick={handleClick}>See More</h1>
//         <FaArrowRight className='text-orange-500 text-xs sm:text-xs md:text-2xl md:pl-2 cursor-pointer' onClick={handleClick}/>
//       </div>
//     </div>
//   );
// };

// export default StreetShowcase;




// import React, { useRef, useEffect } from 'react';
// import StreetVideo from "../../assets/video/Street Video.MOV";
// import './portfolioGrid.css';
// import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import '../fontstyle.css';
// import { FaArrowRight } from "react-icons/fa";

// const StreetShowcase = () => {
//   const videoRef = useRef(null);
//   const headingRef = useRef(null);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/streetPhotography');
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
//         headingRef.current.classList.add('animated-heading');
//       }
//     } else {
//       video.pause();
//       if (headingRef.current) {
//         headingRef.current.classList.remove('animated-heading');
//       }
//     }
//   }, [inView]);

//   return (
//     <div className='mb-40'>
//       <div className={`flex p-8 justify-center showcase `} ref={ref}>
//         <div className="p-5">
//           <div className="animated-heading-container mt-40" style={{ fontFamily: 'Mostin-Black' }}>
//             <h2 className={`text-4xl  mb-2 text-orange-500 animated-heading ${inView ? 'slide-in-heading' : ''}`} ref={headingRef}>Street Photography</h2>
//           </div>
//         </div>
//         <div className="white-container">
//           <div className={` ${inView ? 'slide-in-video' : ''}`}>
//             <video
//               ref={videoRef}
//               src={StreetVideo}
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//             />
//           </div>
//         </div>
//         <div className={"bg-white p-8 w-12 aspect-w-3 flex flex-col hover:bg-orange-500"} style={{ fontFamily: 'MostinLight-jEJWO' }} onClick={handleClick}>
//           <h2 className="text-lg  whitespace-pre-line mt-20 transform rotate-90">
//             Street
//           </h2>
//           <h2 className="text-lg  whitespace-pre-line mt-9 transform rotate-90">
//             Photography
//           </h2>
//         </div>
//       </div>
//       <div className='flex justify-center '  style={{ fontFamily: 'MostinThin-x3pxV' }}>
//           <h1 className='text-orange-500 text-lg' onClick={handleClick}>See More</h1>
//           <FaArrowRight className='text-orange-500 text-2xl pl-2' onClick={handleClick}/>
//       </div>
//     </div>
//   );
// };

// export default StreetShowcase;




