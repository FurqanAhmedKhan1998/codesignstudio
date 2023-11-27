import React from 'react';
import image1 from '../../assets/product/1 (1).jpg';
import image2 from '../../assets/product/1 (2).jpg';
import image3 from '../../assets/product/1 (3).jpg';
import image4 from '../../assets/product/1 (4).jpg';
import image5 from '../../assets/product/1 (5).jpg';
import image6 from '../../assets/product/1 (6).jpg';
import image7 from '../../assets/product/1 (7).jpg';
import image8 from '../../assets/product/1 (8).jpg';
import image9 from '../../assets/product/1 (9).jpg';
import image10 from '../../assets/product/1 (10).jpg';
import image11 from '../../assets/product/1 (11).jpg';



const images = [image1, image2, image3,image4, image5, image6,image7, image8,image9,image10,image11];

const ModelGrid = () => {
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

export default ModelGrid;