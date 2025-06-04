import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Simulating an API call to fetch restaurant data
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await response.json();
      // console.log(
      //   res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setListOfRestaurants(
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
      return restaurant?.info?.avgRating >= 4.0;
    });
    setListOfRestaurants(topRatedRestaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="search">
        <button className="filter-btn" onClick={handleButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant?.info?.name}
            cuisines={restaurant?.info?.cuisines?.join(", ")}
            rating={restaurant?.info?.avgRating}
            deliveryTime={restaurant?.info?.sla?.deliveryTime}
            imageUrl={restaurant?.info?.cloudinaryImageId}
            costForTwo={restaurant?.info?.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
