import React, { useState } from "react";

const UsestateHook = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState({ color: "red", text_color: "red" });
  const [name, setName] = useState("");

  const handleClick = () => {
    // setColor({ color: "indigo", text_color: "indigo" });
    setColor((prev) => {
      return { ...prev, color: "indigo" };
    });
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1 className="flex  py-4">USESTATE HOOK</h1>

      <p className="p-1">Example 1 :</p>
      <h1 className="p-2">COUTER: {counter}</h1>
      <button
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={increaseCounter}
      >
        Increase
      </button>

      <p className="p-3">Example 2 :</p>
      <h2 className="p-3">
        My favorite color is{" "}
        <span className={`text-${color.text_color}-900`}>{color.color}</span> !
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => handleClick()}
      >
        Indigo
      </button>

      <p className="p-3">Example 3 :</p>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default UsestateHook;
