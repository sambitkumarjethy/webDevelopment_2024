import React, { useState } from "react";
import "./styles.css";

const DataTable = ({ headers, data, rowsPerPage = 5, action = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getTotalPages = () => {
    return Math.ceil(data.length / rowsPerPage);
  };

  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const renderPageNumbers = () => {
    const totalPages = getTotalPages();
    const pageNumbers = [];
    const delta = 2;
    const left = Math.max(currentPage - delta, 1);
    const right = Math.min(currentPage + delta, totalPages);

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`py-2 px-3 mx-1 rounded-md border ${
              currentPage === i
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === left - 1 || i === right + 1) {
        pageNumbers.push(
          <span key={i} className="py-2 px-3 mx-1">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Sl. No
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getCurrentData().map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {(currentPage - 1) * rowsPerPage + rowIndex + 1}
              </td>
              {headers.map((header, colIndex) =>
                header == "Actions" ? (
                  <td
                    key={colIndex}
                    className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                  >
                    <span className="icon-container">{row[header]}</span>
                  </td>
                ) : (
                  <td
                    key={colIndex}
                    className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                  >
                    {header}.{row[header]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-4">
        <button
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
          className="py-2 px-4 mx-1 bg-gray-300 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="py-2 px-4 mx-1 bg-gray-300 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex mx-2">{renderPageNumbers()}</div>
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === getTotalPages()}
          className="py-2 px-4 mx-1 bg-gray-300 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={() => handleClick(getTotalPages())}
          disabled={currentPage === getTotalPages()}
          className="py-2 px-4 mx-1 bg-gray-300 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 disabled:opacity-50"
        >
          End
        </button>
      </div>
      <div className="text-center mt-4">
        Page {currentPage} of {getTotalPages()}
      </div>
    </div>
  );
};

export default DataTable;
