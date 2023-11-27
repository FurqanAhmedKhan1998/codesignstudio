import React, { useEffect, useState } from 'react';
import './portfolioHeading.css';
import '../fontstyle.css';

const PortfolioHeading = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center pt-10 pb-10 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28" style={{ fontFamily: 'Mostin-Black' }}>
      <div className='animated-Mainheading-container'>
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-orange-500 animated-Mainheading ${showAnimation ? 'slideMainHeading' : ''}`}>
          Our Portfolio
        </h1>
      </div>
    </div>
  );
};

export default PortfolioHeading;



// import React, { useEffect, useState } from 'react';
// import './portfolioHeading.css';
// import '../fontstyle.css';

// const PortfolioHeading = () => {
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowAnimation(true);
//     }, 1000);
//   }, []);

//   return (
//     <div className="flex justify-center items-center pt-10 pb-10" style={{ fontFamily: 'Mostin-Black' }} >
//       <div className='animated-Mainheading-container '>
//          <h1 className={`text-6xl font-bold mb-2 text-orange-500 animated-Mainheading ${showAnimation ? 'slideMainHeading' : ''}`}>Our Portfolio</h1>
//       </div>
//     </div>
//   );
// };

// export default PortfolioHeading;

