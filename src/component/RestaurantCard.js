import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resList } = props;
  const {loggedInUser} = useContext(UserContext);

  return (
    <div
      className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resList?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resList?.name}</h3>
      <h4>{resList?.cuisines.join(", ")}</h4>
      <h4>{resList?.avgRating}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
