import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

// import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories: ",categories);
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestroMenu;

{
  /* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100} .Rs only
          </li>
        ))}
      </ul> */
}
