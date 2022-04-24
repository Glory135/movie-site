import React from "react";
import { AdminSidebar } from "../AdminComponents/AdminSidebar";
import { AllUsers } from "../AdminComponents/AllUsers";

export const Users = () => {
  return (
    <div className='admin'>
      <div className='admin_side_container'>
        <AdminSidebar />
      </div>
      <div className='admin_main_container'>
        <div className='admin_main_head'>
          <h1>All Users</h1>
        </div>
        <div className='admin_main_videos_container'>
          <AllUsers />
        </div>
      </div>
    </div>
  );
};
