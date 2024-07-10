import React, { useState } from "react";
import data from "./data";
import "./style.css";
// single selection
// multiple selection
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (currentid) => {
    setSelected(null);
    setMultiple([]);
    console.log({ currentid });
    setSelected(currentid === selected ? null : currentid);
  };

  const handleMultiSelection = (currentid) => {
    setSelected(null);
    setMultiple([]);
    let copyMultiple = [...multiple];
    const findIndexofCurrentId = copyMultiple.indexOf(currentid);
    //  console.log({ copyMultiple, currentid, findIndexofCurrentId });

    findIndexofCurrentId === -1
      ? copyMultiple.push(currentid)
      : copyMultiple.slice(findIndexofCurrentId, 1);
    setMultiple(copyMultiple);
  };
  console.log(selected, multiple);
  return (
    <div className="acc-wrapper wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi selection {enableMultiSelection ? "Enabled" : "Disabled"}
      </button>
      <div className="acc-wrapper accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
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
