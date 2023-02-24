import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { handleDelete } from "../../Utilities";
import { Context } from "../../App";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminEpisodes = ({ seasonId }) => {
  const [episodes, setEpisodes] = useState([]);
  const { setLoggedIn, setUser, setEditMode } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    const getEpisodes = async () => {
      const res = await axios.get(
        `https://movie-site-5lzl.onrender.com/api/series/season/${seasonId}/episodes`
      );
      setEpisodes(res.data);
    };
    getEpisodes();
  }, [seasonId]);

  const edit = (id) => {
    setEditMode(true);
    navigate(`/admin/series/season/episode/create/?id=${id}`);
  };

  const columns = [
    { field: "episode", headerName: "Episode", width: 150 },
    { field: "airDate", headerName: "Air Date", width: 150 },
    { field: "runTime", headerName: "Run Time", width: 150 },
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
              onClick={() => edit(params.row._id)}
              className='action_btn edit_btn'
            >
              <EditOutlined className='action edit_icon' />
            </div>
            <div
              onClick={() =>
                handleDelete(
                  `https://movie-site-5lzl.onrender.com/api/admin/series/season/episode`,
                  params.row._id,
                  `Episode ${params.row.episode} in  Season ${params.row.seasonNo} of ${params.row.title}`,
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
        {episodes.length >= 1 && (
          <h1>
            All Episodes in Season {episodes[0].seasonNo} of {episodes[0].title}
          </h1>
        )}
      </div>
      <DataGrid rows={episodes} columns={columns} pageSize={8} />
    </>
  );
};
