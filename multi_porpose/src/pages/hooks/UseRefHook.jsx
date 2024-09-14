import React, { useState, useRef, useEffect } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  console.log(count);

  const inputElement = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });
  const handleClick = () => {
    console.log(inputElement.current);
    inputElement.current.style.width = "500px";
    inputElement.current.focus();
  };

  return (
    <div>
      <h2 className="p-2">Creation of mutable value using Useref Hook</h2>
      <h2>Render Count: {count.current}</h2>
      <h2>Name : {name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <h2 className="p-2">Accessing Dom Element</h2>
      <div className="p-2">
        <input type="text" ref={inputElement} />
        <button
          className="x-2 bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4   rounded-full "
          onClick={handleClick}
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default UseRefHook;
