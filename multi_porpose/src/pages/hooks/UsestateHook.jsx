import React, { useState } from "react";

const UsestateHook = () => {
  const [color, setColor] = useState({ color: "red", text_color: "red" });
  const handleClick = () => {
    // setColor({ color: "indigo", text_color: "indigo" });
    setColor((prev) => {
      return { ...prev, color: "indigo" };
    });
  };

  return (
    <div>
      <h1 className="flex  py-4">USESTATE HOOK</h1>
      <h1>Count: 0</h1>
      <h2>
        My favorite color is{" "}
        <span className={`text-${color.text_color}-900`}>{color.color}</span> !
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4   rounded-full "
        onClick={() => handleClick()}
      >
        Indigo
      </button>
    </div>
  );
};

export default UsestateHook;
