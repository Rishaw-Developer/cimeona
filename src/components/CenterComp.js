import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import "./imageCss.css";
import PostBox from "./PostBox";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function CenterComp() {
  const images = [
    "https://source.unsplash.com/weekly?food",
    "https://source.unsplash.com/weekly?juice",
  ];
  const [post, setPost] = useState([]);
  const [tweet, setTweet] = useState("");
  const addTheTweet = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, "tweets", "TW"), {
      category: "tweet",
      tweetText: tweet,
      timestamp: '',
    });
  };
  return (
    <div className="flex flex-col p-5">
      <div className="bg-gray-700 rounded-lg p-5 mb-4 min-w-max">
        <div>
          <div className="flex gap-1">
            <AccountCircleRoundedIcon fontSize="large" />
            <input
              type="text"
              placeholder="Write Your Tweet"
              className="w-full pl-3 bg-gray-500 outline-none rounded-full"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <button
            style={{ backgroundColor: "#03d1d2" }}
            className="w-full bg-green-500 rounded-lg font-semibold py-2 mt-3"
            onClick={addTheTweet}
          >
            Share The Tweet
          </button>
        </div>
        <hr className="my-2 border-gray-500" />
        <Link to="/addpost">
          <button className="w-full font-bold shadow-lg rounded-lg py-2 bg-gradient-to-r from-green-400 to-blue-500">
            Let's Go and Write a New Post
          </button>
        </Link>
      </div>
      {/* {Array(5)
        .fill()
        .map((i) => (
          <PostBox key={i} />
        ))} */}
      {images.map((link, i) => (
        <PostBox key={i} links={link} />
      ))}
    </div>
  );
}

export default CenterComp;
