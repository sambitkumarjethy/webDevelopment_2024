import React from "react";
import { useState } from "react";
import "./hooks.css";
// const initialState = false;
const initialState = {
  toggleTextHandle: false,
  formDataHandle: {
    name: "",
    city: "",
  },
};

function Hooks() {
  let { toggleTextHandle, formDataHandle } = initialState;
  const [toggleText, setToogleText] = useState(toggleTextHandle);
  const [formData, setFormData] = useState(formDataHandle);
  const handleToggleText = () => {
    setToogleText(!toggleText);
  };
  console.log(formData);

  console.log(toggleText);

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleCityChange = (event) => {
    setFormData({ ...formData, city: event.target.value });
  };
  return (
    <div className="App">
      <h1>UseState Hook</h1>
      <div>
        {toggleText ? <p>Hello world</p> : null}

        <button
          onClick={handleToggleText}
          // onClick= {(event)=>{setFormData(...formData,name:event.target.value)}}
        >
          Toggle Text
        </button>
        <div>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            placeholder="name"
          />
          <select name="city" onChange={handleCityChange}>
            <option value={""} id="">
              Select City
            </option>
            <option value={"bangluru"}>Bangluru</option>
            <option value={"pune"}>pune</option>
          </select>
        </div>
        <div>
          <p>Name is {formData.name}</p>
          <p>city is {formData.city}</p>
        </div>
      </div>
    </div>
  );
}

export default Hooks;
