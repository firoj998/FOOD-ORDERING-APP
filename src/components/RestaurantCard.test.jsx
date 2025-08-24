import { render } from "@testing-library/react";
import { it } from "vitest";
import RestaurantCard from "./RestaurantCard";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard />);
});
