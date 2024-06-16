import React from "react";
import { dataTableHeaders, dataTableData } from "../../data/accountHead.js";
import DataTable from "../../components/DataTable.jsx";

const AccountHead = () => {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Accounts Head</h2>
      <DataTable
        headers={dataTableHeaders}
        data={dataTableData}
        rowsPerPage={5}
      />
    </div>
  );
};

export default AccountHead;
