import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { logOut } from "../../Utilities";

export const AdminSidebar = () => {
  const { setLoggedIn, setUser } = useContext(Context);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className='adminSidebar'>
      <Link className='Link' to='/admin'>
        <div
          style={{ border: pathname === "/admin" && "1px solid #dd003f" }}
          className='adminSidebar_item'
        >
          <i className='fa fa-home'></i> <span>Dashbord</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/users'>
        <div
          style={{ border: pathname === "/admin/users" && "1px solid #dd003f" }}
          className='adminSidebar_item'
        >
          <i className='fa fa-user'></i> <span>Users</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/movies/create'>
        <div
          style={{
            border: pathname === "/admin/movies/create" && "1px solid #dd003f",
          }}
          className='adminSidebar_item'
        >
          <i className='fa fa-plus'></i> <span>Add Movie</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/series/create'>
        <div
          style={{
            border: pathname === "/admin/series/create" && "1px solid #dd003f",
          }}
          className='adminSidebar_item'
        >
          <i className='fa fa-plus'></i> <span>Add Series</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/series/season/create'>
        <div
          style={{
            border:
              pathname === "/admin/series/season/create" && "1px solid #dd003f",
          }}
          className='adminSidebar_item'
        >
          <i className='fa fa-plus'></i> <span>Add Season</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/series/season/episode/create'>
        <div
          style={{
            border:
              pathname === "/admin/series/season/episode/create" &&
              "1px solid #dd003f",
          }}
          className='adminSidebar_item'
        >
          <i className='fa fa-plus'></i> <span>Add Episode</span>
        </div>
      </Link>

      <Link className='Link' to='/admin/settings'>
        <div
          style={{
            border: pathname === "/admin/settings" && "1px solid #dd003f",
          }}
          className='adminSidebar_item'
        >
          <i className='fa fa-bolt'></i> <span>Admin Settings</span>
        </div>
      </Link>

      <div
        onClick={() => {
          logOut(setLoggedIn, setUser);
          navigate("/");
        }}
        className='adminSidebar_item'
      >
        <i className='fa fa-door-open'></i> <span>log out</span>
      </div>
    </div>
  );
};
