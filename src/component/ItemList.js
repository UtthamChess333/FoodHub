import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ items }) => {
  // console.log("Items: ", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span className="font-bold"> ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white">Add +</button>
            </div>

            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
