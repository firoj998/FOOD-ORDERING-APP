import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart-(0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/); // Regex
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});
