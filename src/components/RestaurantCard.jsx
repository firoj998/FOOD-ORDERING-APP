import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  rating,
  deliveryTime,
  imageUrl,
  costForTwo,
}) => {
  return (
    <div className="p-2 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        className="res-logo rounded-lg hover:scale-105"
        src={IMAGE_CDN_URL + imageUrl}
        alt="Restaurant Logo"
      />
      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{rating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
