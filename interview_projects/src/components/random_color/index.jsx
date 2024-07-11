import { React, useState, useEffect } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorutility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorutility(hex.length)];
    }
    console.log({ hexColor });
    setColor(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const r = randomColorutility(256);
    const g = randomColorutility(256);
    const b = randomColorutility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);
  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={() => {
          typeOfColor === "hex"
            ? handleCreateRandomHexColor()
            : handleCreateRandomRgbColor();
        }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          fontsize: "600px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
