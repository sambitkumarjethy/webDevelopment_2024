import React, { useState } from "react";
import "./App.css";
import TextBox from "./components/TextBox.tsx";
import Dropdown from "./components/Dropdown.tsx";

function App() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-1/4">
        <TextBox placeholder="Enter user name" />
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onOptionSelect={setSelectedOption}
        />
      </div>
    </div>
  );
}

export default App;
