import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { handleDelete } from "../../Utilities";
import { Context } from "../../App";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";

export const AdminSeasons = ({ setSeasonId, setShowEpisodes, serieId }) => {
  const [seasons, setSeasons] = useState([]);
  const { setLoggedIn, setUser } = useContext(Context);

  useEffect(() => {
    const getSeasons = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/series/${serieId}/seasons`
      );
      setSeasons(res.data);
    };
    getSeasons();
  }, [serieId]);

  const handleBtnClick = (id) => {
    setSeasonId(id);
    setShowEpisodes(true);
  };

  const columns = [
    { field: "season", headerName: "Season", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    {
      field: "episodes",
      headerName: "Episodes",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='btn-container'>
            {" "}
            <button onClick={() => handleBtnClick(params.row._id)}>
              Episodes
            </button>{" "}
          </div>
        );
      },
    },
    { field: "likes", headerName: "Likes", width: 150 },
    { field: "dislikes", headerName: "Dislikes", width: 150 },
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
                  `https://movie-site-5lzl.onrender.com/api/admin/series/season`,
                  params.row._id,
                  `Season ${params.row.season} of ${params.row.title}`,
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

  return (
    <>
      {" "}
      <div className='admin_main_container_head'>
        {seasons.length >= 1 && <h1>All Seasons of {seasons[0].title}</h1>}
      </div>
      <DataGrid rows={seasons} columns={columns} pageSize={8} />
    </>
  );
};
