import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDeatil  } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  console.log("user", user);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDeatil(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className="h-16 bg-white shadow-md">
      <div className="h-full container mx-auto px-10 flex items-center  justify-between ">
        <div>
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md  pl-2">
          <input
            type="text"
            placeholder="Search Product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            {user?.profilepic ? (
              <img
                src={user?.profilepic}
                alt="profile_pic"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <div className="text-2xl cursor-pointer  relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-full  bg-red-600 hover:bg-red-700 text-white items-center "
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-full  bg-red-600 hover:bg-red-700 text-white items-center "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
