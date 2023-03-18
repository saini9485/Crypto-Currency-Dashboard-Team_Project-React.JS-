import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

import CommentLists from "./CommentLists";

import "./Comment.css";

const Comment = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((prevItems) => {
      return [...prevItems, inputList];
    });
    setInputList("");
    // making it empty
  };

  return (
    <>
      <div className="comment_section">
        <div className="header-part">Comments</div>

        <div className="comments_part">
          <ol>
            {Items.map((itemval, index) => {
              return (
                <CommentLists
                  key={index}
                  id={index}
                  text={itemval}
                />
              );
            })}
          </ol>
        </div>

        <div className="input-part">
          <input
            type="text"
            placeholder="Share your comments"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItem}>
            <RiSendPlane2Fill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;
