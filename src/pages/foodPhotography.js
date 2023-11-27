import React from "react";
import FoodGrid from "../components/Food/foodGrid";
import FoodHeading from "../components/Food/foodHeading";

const FoodPhotoGraphy = () => {
  return (
    <div className="w-full bg-black">
      <FoodHeading />
      <FoodGrid />
      
    </div>
  );
};

export default FoodPhotoGraphy;