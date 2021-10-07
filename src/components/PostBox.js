import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import "./imageCss.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import IconButton from "@mui/material/IconButton";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

function PostBox(props) {
  return (
    <div className="bg-gray-700 rounded-lg mb-4 min-w-max">
      <div className="p-5 flex justify-between">
        <div className="flex gap-2 items-center">
          <AccountCircleRoundedIcon fontSize="large" />
          <div>
            <h1 className="font-bold text-sm">@User</h1>
            <h6 className="text-xs text-gray-400">ratneshthakur40@gmail.com</h6>
          </div>
        </div>
        <img src="./optionIcon.svg" alt="" />
      </div>
      <h1 className="m-1">I am Good Person</h1>
      <img
        src={props.links}
        alt="posted_image"
        className="postImage max-w-2xl"
      />

      <hr className="border-gray-500 my-2" />

      <div className="flex items-center gap-3 px-5 pb-3 pt-2">
        <span className="flex font-bold items-center bg-gray-500 rounded-lg pr-2 cursor-pointer justify-center">
          <IconButton>
            <FavoriteBorderRoundedIcon style={{ fill: "red" }} />
          </IconButton>
          <h1>1K</h1>
        </span>
        <span className="flex font-bold items-center bg-gray-500 rounded-lg pr-2 cursor-pointer justify-center">
          <IconButton>
            <ShareRoundedIcon />
          </IconButton>
          Share
        </span>
      </div>
    </div>
  );
}

export default PostBox;
