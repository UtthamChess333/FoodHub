import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 text-left">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title}-({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=541249&catalog_qa=undefined&query=Momos&submitAction=ENTER
