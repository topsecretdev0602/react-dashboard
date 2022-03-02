import React, { useState } from 'react'
import "./users.css"

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userData } from "../../dashboardData";
import { Link } from "react-router-dom";


export default function Users() {

  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
      return (
        <div className="user">
        <img className="userImage" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
              <button className="userEdit">Edit</button>
          </Link>
          <DeleteOutline
              className="userDelete"
              onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
  ];
    
  return (
    <div className="users">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
