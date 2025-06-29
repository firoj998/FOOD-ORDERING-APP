import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* The Outlet component renders the child routes */}
      {/* For example, it will render Body, About, or Contact based on the current route */}
      {/* The Header component is always displayed at the top */}
      {/* The Error component will be displayed if there is an error in any of the routes */}
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
