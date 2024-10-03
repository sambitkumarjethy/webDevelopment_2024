import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  // const [showItems, setShowItem] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 rounded-lg mx-auto bg-yellow-600  my-2 text-white font-bold text-xl p-2 hover:shadow-2xl hover:shadow-yellow-900 hover:bg-yellow-800 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data?.title} ( {data?.itemCards?.length} )
          </span>
          <span> {showItems ? "🢁" : "⮯"} </span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
