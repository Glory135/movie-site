import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { handleDelete, notifyError } from "../../Utilities";
import { Context } from "../../App";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";

export const AdminSeries = ({ setShowSeasons, setSerieId }) => {
  const { setLoggedIn, setUser } = useContext(Context);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getSeries = async () => {
      try {
        const res = await axios.get(
          "https://moviehunterr.herokuapp.com/api/series"
        );
        setSeries(res.data.reverse());
      } catch (err) {
        console.log(err);
        notifyError(
          "An Error Occured while trying to lload movies try reloading the page"
        );
      }
    };
    getSeries();
  }, []);

  const handleBtnClick = (id) => {
    setSerieId(id);
    setShowSeasons(true);
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
    {
      field: "seasons",
      headerName: "Seasons",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='btn-container'>
            {" "}
            <button onClick={() => handleBtnClick(params.row._id)}>
              Seasons
            </button>{" "}
          </div>
        );
      },
    },

    { field: "writter", headerName: "Writter", width: 150 },
    { field: "director", headerName: "Director", width: 150 },

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
              onClick={() =>
                handleDelete(
                  `https://moviehunterr.herokuapp.com/api/admin/series`,
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

  return <DataGrid rows={series} columns={columns} pageSize={8} />;
};
