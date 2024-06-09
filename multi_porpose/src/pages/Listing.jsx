import React from "react";
import { dataTableHeaders, dataTableData } from "../data/dataTable.js";
import DataTable from "../components/DataTable.jsx";

const Listing = () => {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <h2 className="text-xl font-semibold mb-4">User Data Table</h2>
      <DataTable
        headers={dataTableHeaders}
        data={dataTableData}
        rowsPerPage={5}
      />
    </div>
  );
};

export default Listing;
