import React, { useState } from "react";
import data from "./data";
import "./style.css";
// single selection
// multiple selection
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (currentid) => {
    console.log({ currentid });
    setSelected(currentid == selected ? null : currentid);
  };
  console.log(selected);
  return (
    <div className="acc-wrapper wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="title">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
