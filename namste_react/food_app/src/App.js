import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocerry from "./components/Grocerry";
import userContext from "./utils/UserContext";

// chunking
// code splitting
// Dynamic Bundling
// lazy loading
// on demand loading

const Grocerry = lazy(() => import("./components/Grocerry"));
const LiveChat = lazy(() => import("./components/LiveChat"));
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Authentication code
    // make a API call and send username
    const data = {
      name: "Sambit Jethy",
    };
    setUserName(data.name);
  }, []);

  return (
    <userContext.Provider value={{ loggedIn: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
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
