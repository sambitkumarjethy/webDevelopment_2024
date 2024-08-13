import { FaEdit, FaTrashAlt } from "react-icons/fa";
const dataTableHeaders = ["Task", "Actions"];
const dataTableData = [
  {
    Task: "Read Test books",
    Actions: [<FaEdit key="edit" />, <FaTrashAlt key="delete" />],
  },
  {
    Task: "Read Comics",
    Actions: [<FaEdit key="edit" />, <FaTrashAlt key="delete" />],
  },
];

export { dataTableHeaders, dataTableData };
