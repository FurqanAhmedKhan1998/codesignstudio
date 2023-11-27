import React, { useEffect, useRef } from "react";
import HandWritingVideo from "../../assets/video/hand writing size fix.mp4";

const VideoBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("canplay", () => {
      video.play();
    });

    video.addEventListener("ended", () => {
      video.play();
    });
  }, []);

  return (
    <div className="h-screen flex mt-0 mb-0 items-center justify-center ">
      <div className="w-full" style={{ maxWidth: "70%" }}>
        <div className="relative aspect-w-22 aspect-h-2">
          <video
            ref={videoRef}
            src={HandWritingVideo}
            className="w-full h-auto"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;

// import React, { useEffect, useRef } from "react";
// import HandWritingVideo from "../../assets/video/hand writing f.mp4";

// const VideoBanner = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     video.addEventListener("canplay", () => {
//       video.play();
//     });

//     video.addEventListener("ended", () => {
//       video.play();
//     });
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full m-0" style={{ maxWidth: "80%" }}>
//         <div className="relative aspect-w-26 aspect-h-4">
//           <video
//             ref={videoRef}
//             src={HandWritingVideo}
//             className="w-full h-auto"
//             autoPlay
//             loop
//             muted
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoBanner;
