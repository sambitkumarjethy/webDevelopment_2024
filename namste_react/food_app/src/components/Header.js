import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(userContext);

  // subscribing store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-yellow-100 shadow-md shadow-yellow-400 sm:bg-yellow-100">
      <div className="logo-container">
        <div className="text-yellow-700 font-extrabold text-4xl my-6 mx-10  ">
          <Link to="/">🍽️ Namste Restro😋</Link>
        </div>
        {/*  <img
          className="w-48 bg-transparent  bg-opacity-100 md:bg-opacity-50"
          src={LOGO_URL}
          alt="logo"
        />*/}
      </div>
      <div className="flex items-center  ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 text-lg  hover:font-bold hover:text-orange-600">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-lg hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4 text-lg  hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 text-lg  hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4 text-lg  hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <Link to="/grocerry"> Grocerry</Link>
          </li>
          <li className="px-4 text-lg hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <Link to="/livechat"> Live Chat</Link>
          </li>
          <li className="relative px-4 text-lg font-bold hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl">
            <span className="absolute -top-2 right-0 text-sm bg-orange-600 text-white px-1   rounded-full">
              <Link to="/cart">{cartItems.length}</Link>
            </span>
            🛒
          </li>
          <button
            className="px-2 login text-xl  hover:font-bold hover:text-orange-600 hover:bg-white hover:rounded-2xl"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <div className="px-2 font-bold">{data.loggedIn}</div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
