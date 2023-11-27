import React from 'react';
import image2 from "../../assets/food/1 (2).jpg";
import image3 from "../../assets/food/1 (3).jpg";
import image1 from "../../assets/food/1 (1).jpg";
import image4 from "../../assets/food/1 (4).jpg";
import image5 from "../../assets/food/1 (5).jpg";
import image6 from "../../assets/food/1 (6).jpg";
import image7 from "../../assets/food/1 (7).jpg";
import image8 from "../../assets/food/1 (8).jpg";
import image9 from "../../assets/food/1 (9).jpg";
import image10 from "../../assets/food/1 (10).jpg";
import image11 from "../../assets/food/1 (11).jpg";
import image12 from "../../assets/food/1 (12).jpg";
import image13 from "../../assets/food/1 (13).jpg";
import image14 from "../../assets/food/1 (14).jpg";
import image15 from "../../assets/food/1 (15).jpg";
import image16 from "../../assets/food/1 (16).jpg";
import image17 from "../../assets/food/1 (17).jpg";
import image18 from "../../assets/food/1 (18).jpg";



const images = [ image2, image3,image4,image1, image5, image6,image7, image8, image12,image9,image10,image11,image13,image16,image15,image14,image17,image18];

const StreetGrid = () => {
  return (
    <div className="   p-10 pr-20 pl-20 flex justify-center item-center">
      <div className="flex flex-wrap -mx-4">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-4">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreetGrid;