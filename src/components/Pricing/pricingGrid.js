import React from "react";
import {
  FaCamera,
  FaPortrait,
  FaHeart,
  FaCameraRetro,
  FaBuilding,
  FaImage,
  FaDolly,
  FaRegBuilding,
  FaUserSecret,
  FaEdit,
} from "react-icons/fa";

const servicePricing = [
  {
    service: {
      title: "Street Photography", 
      description: "Immerse yourself in the urban jungle with our street photography services. We specialize in capturing the raw and authentic moments of city life. Our skilled photographers will document the essence of the streets with a keen eye for detail.",
      icon: <FaRegBuilding />,
    },
    price: 440,
  },
  {
    service: {
      title: "Food Photography", 
      description: "Savor the flavors through our food photography services. We are experts in creating mouthwatering images of culinary delights. From gourmet dishes to street food, we know how to make food look as delicious as it tastes.",
      icon: < FaDolly />,
    },
    price: 440,
  },
  {
    service: {
      title: "Model Photography", 
      description: "Embrace the world of fashion and beauty with our model photography services. Our professional photographers are skilled at creating stunning images that showcase your unique style and personality. We offer a range of packages to suit your modeling needs.",
      icon: <FaUserSecret />,
    },
    price: 440,
  },
  {
    service: {
      title: "Product Photography",
      description:
        "Showcase your products in the best light with our professional product photography services.",
      icon: <FaImage />,
    },
    price: 350,
  },
  {
    service: {
      title: "Wedding Photography",
      description:
        "Capture the magic of your special day with our professional wedding photography services.",
      icon: <FaCamera />,
    },
    price: 500,
  },

 
  // {
  //   service: {
  //     title: "Family Portraits",
  //     description:
  //       "Preserve the warmth and togetherness of your family with our family portrait sessions.",
  //     icon: <FaPortrait />,
  //   },
  //   price: 300,
  // },
  // {
  //   service: {
  //     title: "Engagement Sessions",
  //     description:
  //       "Celebrate your love story with beautiful engagement photography sessions.",
  //     icon: <FaHeart />,
  //   },
  //   price: 250, 
  // },
  // {
  //   service: {
  //     title: "Event Photography",
  //     description:
  //       "Document your events and celebrations with our expert event photographers.",
  //     icon: <FaCameraRetro />,
  //   },
  //   price: 400, 
  // },
  // {
  //   service: {
  //     title: "Corporate and Commercial Photography",
  //     description:
  //       "Enhance your corporate branding with our high-quality commercial photography.",
  //     icon: <FaBuilding />,
  //   },
  //   price: 600, 
  // },
 
  // {
  //   service: {
  //     title: "Photo Editing and Retouching",
  //     description:
  //       "Let us enhance and retouch your photos to perfection with our editing services.",
  //     icon: <FaEdit />,
  //   },
  //   price: 100, 
  // },
 
];

const Pricing = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-semibold mb-4 text-white">
        Our Services and Pricing
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicePricing.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg text-white"
          >
            <div className="mb-2">
            <h2 className="text-2xl font-semibold inline-block mr-2">{item.service.icon}</h2>
            <h2 className="text-2xl font-semibold inline-block">{item.service.title}</h2>
            </div>
            
            <p className="text-gray-600">{item.service.description}</p>
            <p className="text-2xl mt-4">${item.price}</p>
            {/* <button className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md">
              Book Now
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

function PricingGrid() {
  return (
    <div>
      <Pricing />
    </div>
  );
}

export default PricingGrid;
