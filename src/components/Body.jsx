import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await response.json();
      setListOfRestaurants(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const handleButtonClick = () => {
    const topRatedRestaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4.5;
    });
    setFilteredRestaurants(topRatedRestaurants);
  };
  const HandleSearchButton = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredRestaurants);
  };
  if (!onlineStatus)
    return (
      <h1>
        {" "}
        Looks like you are Offline!! please check your internet connection;
      </h1>
    );
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-4 bg-green-100 rounded-md cursor-pointer"
            onClick={HandleSearchButton}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-green-100 rounded-md cursor-pointer"
            onClick={handleButtonClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard
              name={restaurant?.info?.name}
              cuisines={restaurant?.info?.cuisines?.join(", ")}
              rating={restaurant?.info?.avgRating}
              deliveryTime={restaurant?.info?.sla?.deliveryTime}
              imageUrl={restaurant?.info?.cloudinaryImageId}
              costForTwo={restaurant?.info?.costForTwo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
