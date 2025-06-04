import React from "react";
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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={IMAGE_CDN_URL + imageUrl}
        alt="Restaurant Logo"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{rating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
