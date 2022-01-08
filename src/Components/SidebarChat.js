import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";


function SidebarChat({ addNewChat }) {
  const [SEED, setSEED] = useState("");

  useEffect(() => {
    setSEED(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //do some clever datbase stuff..

    }
  };

  return !addNewChat ? (
    <div className="sidebarChats__main">
      <Avatar src={`https://avatars.dicebear.com/api/human/${SEED}.svg`} />
      <div className="sidebarChats__info">
        <h2>Room name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} 
    className="sidebarChats__main">
      <h2>Add new chat</h2>
    </div>
  );
  // return(
  //   <div onClick={createChat} 
  //   className="sidebarChats__main">
  //     <h2>Add new chat</h2>
  //   </div>
  // )
}
export default SidebarChat; 
