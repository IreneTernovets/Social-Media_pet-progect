import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Avatar from "@mui/material/Avatar";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import Divider from "@mui/material/Divider";

const PostInput = () => {
  return (
    <div className="post-input-wrapper">
      <div className="post-input-wrapper-header">
        <h2>Home</h2>
        <AutoAwesomeOutlinedIcon className="twitter-blue" />
      </div>
      <Divider />
      <form className="post-input-input">
        <Avatar
          className="post-input-avatar"
          alt="Irena Ternovets"
          src="/static/images/avatar/1.jpg"
        />
        <input type="text" placeholder="What's happening?" />
      </form>
      <div className="post-input-wrapper-buttons">
        <div className="post-input-wrapper-buttons-icons">
          <PhotoOutlinedIcon className="twitter-blue" />
          <GifBoxOutlinedIcon className="twitter-blue" />
          <AlignHorizontalLeftOutlinedIcon className="twitter-blue" />
          <SentimentSatisfiedAltOutlinedIcon className="twitter-blue" />
          <EventOutlinedIcon className="twitter-blue" />
        </div>
        <button className="post-input-wrapper-buttons-tweet">Tweet</button>
      </div>
    </div>
  );
};

export default PostInput;
