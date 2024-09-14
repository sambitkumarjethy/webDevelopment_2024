import React, { useState, UseReducer, useReducer } from "react";

const initialState = { count: 0 };

const UseReducerHook = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  const increment = (prev) => {
    setCount(count + 1);
  };
  const decrement = (prev) => {
    setCount(count - 1);
  };
  return (
    <div>
      Use Reducer Hook
      <h2>Counter: {count}</h2>
      <button
        className="p-2 bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => {
          increment();
        }}
      >
        Increase
      </button>
      <button
        className="p-2 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => {
          decrement();
        }}
      >
        Decreasee
      </button>
    </div>
  );
};

export default UseReducerHook;
