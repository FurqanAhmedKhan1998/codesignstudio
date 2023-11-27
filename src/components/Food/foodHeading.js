import React, { useEffect, useState } from 'react';
import '../../components/Portfolio/portfolioHeading.css';

const FoodHeading = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center pt-10 pb-10">
      <div className='animated-Mainheading-container '>
         <h1 className={`text-4xl sm:text-2xl md:text-5xl lg:text-6xl font-bold mb-2 text-orange-500 animated-Mainheading ${showAnimation ? 'slideMainHeading' : ''}`}>Food Photography</h1>
      </div>
    </div>
  );
};

export default FoodHeading;



// import React, { useEffect, useState } from 'react';
// import '../../components/Portfolio/portfolioHeading.css';

// const FoodHeading = () => {
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowAnimation(true);
//     }, 1000);
//   }, []);

//   return (
//     <div className="flex justify-center items-center pt-10 pb-10">
//       <div className='animated-Mainheading-container '>
//          <h1 className={`text-6xl font-bold mb-2 text-orange-500 animated-Mainheading ${showAnimation ? 'slideMainHeading' : ''}`}>Food Photography</h1>
//       </div>
//     </div>
//   );
// };

// export default FoodHeading;