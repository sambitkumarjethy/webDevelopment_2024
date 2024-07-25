import { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";
import "./styles.css";

import { BsFillTrashFill, BsInfoCircleFill } from "react-icons/bs";

const Crud = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>TodO List</h2>
      <Create setTodos={setTodos} />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => {
          return (
            <div className="task" key="index">
              <div className="checkbox">
                <BsInfoCircleFill className="icon" />
              </div>
              <p>
                {index + 1}.{todo.task}
              </p>
              <div>
                <span>
                  <BsFillTrashFill className="icon" />
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Crud;
