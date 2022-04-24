import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import axios from "axios";
import { handleDelete, notifyError } from "../../Utilities";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

export const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const { setLoggedIn, setUser, setEditMode } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "https://moviehunterr.herokuapp.com/api/movies/all"
        );
        setMovies(res.data.reverse());
      } catch (err) {
        console.log(err);
        notifyError(
          "An Error Occured while trying to lload movies try reloading the page"
        );
      }
    };
    getMovies();
  }, []);

  const edit = (id) => {
    setEditMode(true);
    navigate(`/admin/movies/create/?id=${id}`);
  };
  const columns = [
    // { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "genres",
      headerName: "Gengres",
      width: 200,
      renderCell: (params) => {
        return <>{params.row.genres.join(", ")}</>;
      },
    },
    { field: "year", headerName: "Year", width: 150 },
    { field: "airDate", headerName: "Air Date", width: 150 },
    { field: "writter", headerName: "Writter", width: 150 },
    { field: "director", headerName: "Director", width: 150 },
    { field: "runTime", headerName: "Run Time", width: 140 },
    { field: "likes", headerName: "Likes", width: 100 },
    { field: "dislikes", headerName: "Dislikes", width: 100 },
    {
      field: "time",
      headerName: "Posted at",
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
              onClick={() => edit(params.row._id)}
              className='action_btn edit_btn'
            >
              <EditOutlined className='action edit_icon' />
            </div>
            <div
              onClick={() =>
                handleDelete(
                  `https://moviehunterr.herokuapp.com/api/admin/movies/delete`,
                  params.row._id,
                  params.row.title,
                  setLoggedIn,
                  setUser
                )
              }
              title={`Delete ${params.row.title}`}
              className='action_btn delete_btn'
            >
              <DeleteOutline className='action delete_icon' />
            </div>
          </>
        );
      },
    },
  ];

  return <DataGrid rows={movies} columns={columns} pageSize={8} />;
};
