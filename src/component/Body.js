// import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import User from "./User";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //console.log("ll", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=80461&tags=layout_CCS_Momos&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    // console.log("json here",json)
    setListOfRestaurants(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);

    // console.log("Second time rendering: ",json?.data?.cards);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Shimmer />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-1 bg-pink-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filtreredRestaurant = listOfRestaurants.filter((res) => {
                return res?.card?.card?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filtreredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-1 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res?.card?.card?.info?.avgRating > 4;
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <label>User Name: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant?.card?.card?.info?.id}
              to={"restaurant/" + restaurant?.card?.card?.info?.id}
            >
              <RestaurantCard
                key={restaurant?.card?.card?.info?.id}
                resList={restaurant?.card?.card?.info}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
