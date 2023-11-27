import React from 'react';
import image1 from '../../assets/model/IMG_0829.JPG';
import image2 from '../../assets/model/IMG_2064.JPG';
import image3 from '../../assets/model/IMG_2067.JPG';
import image4 from '../../assets/model/IMG_2308.JPG';
import image5 from '../../assets/model/IMG_2530.JPG';
import image6 from '../../assets/model/IMG_2710.JPG';
import image7 from '../../assets/model/IMG_2712.JPG';
import image8 from '../../assets/model/IMG_8822.JPG';
// import image9 from '../../assets/model/IMG_8827.JPG';
// import image10 from '../../assets/model/IMG_8862.JPG';
import image11 from '../../assets/model/IMG_8863.JPG';

const images = [image1, image2, image3,image4, image5, image6,image7, image8,
    //  image9,image10,
     image11];

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