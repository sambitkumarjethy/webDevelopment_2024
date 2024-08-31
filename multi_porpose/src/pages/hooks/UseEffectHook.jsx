import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  const [time, setTime] = useState(0);

  // CASE 1 -- WITHOUT DEPENDENCY ARRAY
  // useEffect(() => {
  //   return () => {
  //     console.log("UseEffect Called !");
  //     document.title = `${count} new Message!`;
  //   };
  // });

  // CASE 2 - WITH [] dependency -it will run only one time
  // useEffect(() => {
  //   return () => {
  //     console.log("UseEffect Called !");
  //     document.title = `${count} new Message!`;
  //   };
  // }, []);

  // CASE 3 - WITH a dependency -it will run only one dependency change
  useEffect(() => {
    return () => {
      console.log("UseEffect Called !");
      document.title = `${otherCount} new Message!`;
    };
  }, [otherCount]);

  // CASE 4 -  CLEAN UP FUNCTION
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  // CASE - 5 -  CLEAN UP FUNCTION

  useEffect(() => {
    console.log("Run Use Effect", count);

    return () => {
      console.log("Clean up", count);
    };
  }, [count]);
  return (
    <div>
      UseEffect Hook
      <h3 className="p-2">{count} new Message! </h3>
      <button
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <h3 className="p-2">{otherCount} new Message! </h3>
      <button
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => setOtherCount(otherCount + 1)}
      >
        Increase
      </button>
      <h3>{time} in seconds</h3>
    </div>
  );
};

export default UseEffectHook;
