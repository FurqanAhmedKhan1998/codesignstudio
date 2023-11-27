import React, { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import StreetShowcase from "../components/Portfolio/streetShowcase";
import ModelShowcase from "../components/Portfolio/modelShowcase";
import FoodShowcase from "../components/Portfolio/foodShowcase";
import ProductShowcase from "../components/Portfolio/productShowcase";
import PortfolioHeading from "../components/Portfolio/portfolioHeading";

const Portfolio = () => {
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate');
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);

  //   // Observe each showcase component
  //   document.querySelectorAll('.showcase').forEach((showcase) => {
  //     observer.observe(showcase);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div className="w-full bg-black">
      <PortfolioHeading />
      <StreetShowcase />
      <ModelShowcase />
      <FoodShowcase />
      <ProductShowcase />
    </div>
  );
};

export default Portfolio;



// import React from "react";
// import "font-awesome/css/font-awesome.min.css";
// import StreetShowcase from "../components/Portfolio/streetShowcase";
// import PortfolioHeading from "../components/Portfolio/portfolioHeading";
// import ModelShowcase from "../components/Portfolio/modelShowcase";
// import FoodShowcase from "../components/Portfolio/foodShowcase";
// import ProductShowcase from "../components/Portfolio/productShowcase";


// const Portfolio = () => {
//   return (
//     <div className="w-full bg-black">
//         <PortfolioHeading />
//         <StreetShowcase />
//         <ModelShowcase />
//         <FoodShowcase />
//         <ProductShowcase />
//     </div>
//   );
// };

// export default Portfolio;
