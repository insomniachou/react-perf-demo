import React, { useReducer, useCallback } from "react";
import Table from "react-bootstrap/Table";
import shallowEqual from "../../utils/shallowEqual";

const COLUMN_KEYS = [
  "first_name",
  "last_name",
  "email",
  "gender",
  "ip_address",
];

const TableRow = ({ rowData, updateData }) => {
  return (
    <tr>
      {COLUMN_KEYS.map((key, index) => {
        return (
          <td key={`column-${rowData.id}-${index}`}>
            <input
              value={rowData[key]}
              onChange={(event) =>
                updateData(rowData.id, key, event.target.value)
              }
            />
          </td>
        );
      })}
    </tr>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "update": {
      const { id, key, data } = action.payload;
      const newTableData = state.tableData.map((rowData) => {
        if (rowData.id === id) {
          return {
            ...rowData,
            [key]: data,
          };
        }
        return rowData;
      });
      return {
        ...state,
        tableData: newTableData,
      };
    }
    default:
      throw new Error();
  }
}

const UserTable = ({ tableData }) => {
  const [state, dispatch] = useReducer(reducer, { tableData });
  const updateData = (id, key, data) => {
    dispatch({
      type: "update",
      payload: {
        id,
        key,
        data,
      },
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP Address</th>
        </tr>
      </thead>
      <tbody>
        {state.tableData.map((row, index) => (
          <TableRow
            key={`row-${index}`}
            rowData={row}
            updateData={updateData}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
