import React from 'react';
import { FaMoneyBillWaveAlt } from 'react-icons/fa'; 

function PricingBanner() {
  return (
    <div className="p-8 text-white relative">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-4 animate-bounce">
          <FaMoneyBillWaveAlt className="text-8xl font-bold mr-2 text-orange-500" />
          <h1 className="text-5xl font-bold text-orange-500">Choose Your Pricing Plan</h1>
        </div>
        <p className="text-2xl font-bold">Affordable and flexible options for everyone.</p>
      </div>
    </div>
  );
}

export default PricingBanner;


// import React from 'react';
// import { FaDollarSign } from 'react-icons/fa'; // Dollar icon from react-icons

// function PricingBanner() {
//   return (
//     <div className="bg-blue-500 p-8 text-white relative">
//       <div className="container mx-auto text-center">
//         <div className="flex items-center justify-center mb-4">
//           <FaDollarSign className="text-4xl font-bold mr-2" />
//           <h1 className="text-4xl font-bold">Choose Your Pricing Plan</h1>
//         </div>
//         <p className="text-lg">Affordable and flexible options for everyone.</p>
//       </div>
//     </div>
//   );
// }

// export default PricingBanner;



// import React from 'react';

// function PricingBanner() {
//   return (
//     <div className=" p-8 text-white relative">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold">Choose Your Pricing Plan</h1>
//         <p className="text-lg mb-4">Affordable and flexible options for everyone.</p>
//         <div className="mx-auto w-16 h-16 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="animate-bounce"
//             width="48"
//             height="48"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PricingBanner;


// import React from 'react';

// function PricingBanner() {
//   return (
//     <div className="bg-blue-500 p-8 text-white">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold animate-bounce">Choose Your Pricing Plan</h1>
//         <p className="text-lg">Affordable and flexible options for everyone.</p>
//       </div>
//     </div>
//   );
// }

// export default PricingBanner;




// import React from "react";

// const PricingPage = () => {
//   const pricingPlans = [
//     {
//       title: "Basic Package",
//       price: "$199",
//       features: [
//         "Up to 3 hours of photography",
//         "100 high-resolution photos",
//         "Online gallery",
//         "1 Photographer",
//       ],
//     },
//     {
//       title: "Standard Package",
//       price: "$399",
//       features: [
//         "Up to 6 hours of photography",
//         "200 high-resolution photos",
//         "Online gallery",
//         "Printed photos (5)",
//         "2 Photographers",
//       ],
//     },
//     {
//       title: "Premium Package",
//       price: "$699",
//       features: [
//         "Full-day photography coverage",
//         "300 high-resolution photos",
//         "Online gallery",
//         "Album design",
//         "Printed photos (10)",
//         "2 Photographers",
//       ],
//     },
//   ];

//   return (
//     <div className="bg-black text-white py-8">
//       <div className="container mx-auto">
//         <h1 className="text-4xl text-center font-semibold mb-8">
//           Photography Studio Pricing
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {pricingPlans.map((plan, index) => (
//             <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold text-gray-200 mb-2">
//                 {plan.title}
//               </h2>
//               <p className="text-4xl font-semibold text-orange-500 mb-4">
//                 {plan.price}
//               </p>
//               <ul className="text-gray-400">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="mb-2">
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="block w-full mt-4 bg-orange-500 text-white rounded-full py-2 px-4 hover:bg-orange-600 transition duration-300 ease-in-out">
//                 Order Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;
