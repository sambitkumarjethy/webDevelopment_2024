import React, { useState } from "react";
import LoginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTObase64 from "../helpers/imageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    profilepic: "",
  });
  const handleonChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const imagePic = await imageTObase64(file);
    console.log(imagePic);

    setData((prev) => {
      return {
        ...prev,
        profilepic: imagePic,
      };
    });
  };

  console.log(data);
  return (
    <section id="signup">
      <div className="mx-auto container p-10">
        <div className="bg-white p-5 py-5 w-full max-w-md  mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilepic || LoginIcons} alt="login icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-slate-200 bg-opacity-50 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-full outline-none bg-transparent"
                  name="name"
                  onChange={handleonChange}
                  value={data.name}
                  required
                />
              </div>
            </div>

            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full h-full outline-none bg-transparent"
                  name="email"
                  onChange={handleonChange}
                  value={data.email}
                  required
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full h-full outline-none bg-transparent"
                  name="password"
                  onChange={handleonChange}
                  value={data.password}
                  required
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>

              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showconfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  className="w-full h-full outline-none bg-transparent"
                  name="confirmpassword"
                  onChange={handleonChange}
                  value={data.confirmpassword}
                  required
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowconfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:scale-100 hover:bg-red-700 rounded-full px-6 py-2 my-6 max-w-[150px] w-full  text-white mx-auto block">
              Sign Up
            </button>
          </form>
          <p className="py-4">
            Already have Account ?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 hover:"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
