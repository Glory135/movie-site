import React, { useState } from "react";
import { AdminEpisodes } from "../AdminComponents/AdminEpisodes";
import { AdminMovies } from "../AdminComponents/AdminMovies";
import { AdminSeasons } from "../AdminComponents/AdminSeasons";
import { AdminSeries } from "../AdminComponents/AdminSeries";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";

export const AdminDashboard = () => {
  const [showSeasons, setShowSeasons] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [serieId, setSerieId] = useState("");
  const [seasonId, setSeasonId] = useState("");
  return (
    <div className='admin'>
      <div className='admin_side_container'>
        <AdminSidebar />
      </div>
      <div className='admin_main_container'>
        <div className='admin_main_head'>
          <h1>Admin Dashbourd</h1>
        </div>
        <div className='admin_main_videos_container'>
          <div className='admin_main_container_head'>
            <h1>All Movies</h1>
          </div>
          <AdminMovies />
        </div>
        <div className='admin_main_videos_container'>
          <div className='admin_main_container_head'>
            <h1>All Series</h1>
          </div>
          <AdminSeries
            setSerieId={setSerieId}
            setShowSeasons={setShowSeasons}
          />
        </div>
        {showSeasons && (
          <div className='admin_main_videos_container'>
            <AdminSeasons
              setShowEpisodes={setShowEpisodes}
              setSeasonId={setSeasonId}
              serieId={serieId}
            />
          </div>
        )}
        {showEpisodes && (
          <div className='admin_main_videos_container'>
            <AdminEpisodes seasonId={seasonId} />
          </div>
        )}
      </div>
    </div>
  );
};
