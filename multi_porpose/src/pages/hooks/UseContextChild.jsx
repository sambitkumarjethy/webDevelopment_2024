import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContextProvider";

const UseContextChild = () => {
  const userDetail = useContext(LoginContext);
  console.log(userDetail);
  return <div>UseContextChild</div>;
};

export default UseContextChild;
