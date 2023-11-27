import React from 'react';
import image1 from '../../assets/street/IMG_0092.JPG';
import image2 from '../../assets/street/IMG_0093.JPG';
import image3 from '../../assets/street/IMG_0094.JPG';
import image4 from '../../assets/street/IMG_0095.JPG';
import image5 from '../../assets/street/IMG_0096.JPG';
import image6 from '../../assets/street/IMG_0098.JPG';
import image7 from '../../assets/street/IMG_0099.JPG';
import image8 from '../../assets/street/IMG_0100.JPG';
import image9 from '../../assets/street/IMG_0101.JPG';
import image10 from '../../assets/street/IMG_0102.JPG';

const images = [image1, image2, image3,image4, image5, image6,image7, image8, image9,image10];

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

