import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
        </div>
      </div>
    </div>
  );
}

export default Chat;
