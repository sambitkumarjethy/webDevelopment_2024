import { useState } from "react";
import axios from "axios";
import "./styles.css";

function Create(setTodos) {
  const [task, setTask] = useState([]);
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="home create_form">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
