import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocerry from "./components/Grocerry";

// chunking
// code splitting
// Dynamic Bundling
// lazy loading
// on demand loading

const Grocerry = lazy(() => import("./components/Grocerry"));
const LiveChat = lazy(() => import("./components/LiveChat"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/grocerry",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/livechat",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <LiveChat />
          </Suspense>
        ),
      },

      {
        path: "/restorants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // rendering a component
