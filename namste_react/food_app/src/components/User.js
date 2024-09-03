import { useState, useEffect } from "react";

// useEffect(() => {
//   setInterval(() => {
//     console.log("namste React APP");
//   }, 1000);
//   // Clean up function
//   return () => {
//     // unmounting phase
//     console.log("use Effect Return");
//   };
// }, []);

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h3>Location : Cuttack</h3>
      <h4>Contact : @jethy_sambit</h4>
    </div>
  );
};
export default User;
