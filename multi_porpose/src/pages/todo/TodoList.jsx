import React, { useState } from "react";
import { dataTableHeaders, dataTableData } from "../../data/todo.js";
import DataTable from "../../components/DataTable";
import CreateModal from "./CreateModal";

const TodoList = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="flex justify-end py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          onClick={handleModal}
        >
          Add Task
        </button>
      </div>

      <DataTable
        headers={dataTableHeaders}
        data={dataTableData}
        rowsPerPage={5}
      />
      <CreateModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default TodoList;
