import React from "react";
import cardData from "../../../public/cardData";
 
const Category = () => {
  return (
    <>
    <div className="flex space-x-4 mt-12 justify-center">
    {cardData.map((card) => (
      <div key={card.id} className="max-w-xs">
        <img src={card.images} alt={`Gambar ${card.id}`} className="w-full h-auto rounded-lg" style={{ width: "200px", height: "200px" }} />
      </div>
    ))}
    </div>
    <br /> <br /> <hr className="border-t-2 border-gray-200 my-4"/>
    </>
  );
}

export default Category