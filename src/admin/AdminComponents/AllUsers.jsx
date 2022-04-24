import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { handleDelete, notifyError } from "../../Utilities";
import axios from "axios";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { setLoggedIn, setUser } = useContext(Context);

  useEffect(() => {
    const getUsers = async () => {
      const token = JSON.parse(localStorage.getItem("movieHunter_user_token"));

      try {
        const res = await axios.get(
          "https://moviehunterr.herokuapp.com/api/admin/users/all",
          { headers: { authorization: `Bearer ${token}` } }
        );
        setUsers(res.data.reverse());
      } catch (err) {
        console.log(err);
        notifyError(
          "An Error Occured while trying to load users try reloading the page"
        );
      }
    };
    getUsers();
  }, []);

  const columns = [
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        const { lastname, firstname, admin, username } = params.row;
        return (
          <div title={`${lastname} ${firstname}`} className='name-container'>
            {username}{" "}
            <span
              style={{ backgroundColor: admin ? "red" : "green" }}
              className='admiin'
            >
              {admin ? "Admin" : "User"}{" "}
            </span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },

    { field: "gender", headerName: "Gender", width: 150 },

    {
      field: "time",
      headerName: "Created at",
      width: 150,
      renderCell: (params) => {
        return <>{new Date(params.row.createdAt).toDateString()}</>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <div
              onClick={() =>
                handleDelete(
                  `https://moviehunterr.herokuapp.com/api/admin/users`,
                  params.row._id,
                  params.row.username,
                  setLoggedIn,
                  setUser
                )
              }
              title={`Delete ${params.row.username}`}
              className='action_btn delete_btn'
            >
              <DeleteOutline className='action delete_icon' />
            </div>
          </>
        );
      },
    },
  ];

  return <DataGrid rows={users} columns={columns} />;
};
