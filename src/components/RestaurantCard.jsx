import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="p-2 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        className="res-logo rounded-lg hover:scale-105"
        src={IMAGE_CDN_URL + resData?.cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <div>
        <h3 className="font-bold py-4 text-lg">{resData?.name}</h3>
        <h4>{resData?.cuisines?.join(", ")}</h4>
        <h4>{resData?.avgRating} star</h4>
        <h4>{resData?.costForTwo}</h4>
        <h4>{resData?.sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
