import React from "react";
import { Avatar } from "antd";

import './Comment.css'

const CommentLists = (props) => {
  return (
    <>
      <li className="comment_style">
        <Avatar
          src="https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg"
          alt="icon"
          size={20}
        />
        <span className="text">{props.text}</span>
      </li>
    </>
  );
};

export default CommentLists;
