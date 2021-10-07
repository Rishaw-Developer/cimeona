import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Header() {
  return (
    <div
      className="p-2 flex items-center justify-between shadow-lg top-0 sticky z-50"
      style={{ backgroundColor: "#08222e" }}
    >
      <div className="left flex items-center">
        <Link to="/">
          <img src="./logo1.png" alt="logo_Cimeona" className="w-16" />
        </Link>
        <input
          type="text"
          placeholder="🔍 Search Cimeona"
          className="rounded-full pl-3 outline-none text-gray-900 h-10 bg-gray-700"
        />
      </div>

      <div className="middle flex items-center">
        <NavLink
          title="Home"
          to="/"
          exact
          className="px-5"
          activeClassName=" border-b-2 border-blue-400 pb-1"
        >
          <HomeRoundedIcon fontSize="large" />
        </NavLink>
        <NavLink
          title="Add Post"
          to="/home"
          exact
          className="px-5"
          activeClassName="border-b-2 border-blue-400 pb-1"
        >
          <AddCircleRoundedIcon fontSize="large" />
        </NavLink>
      </div>

      <div className="right pr-3">
        <AccountCircleRoundedIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Header;
