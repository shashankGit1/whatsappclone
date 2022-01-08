import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";

import "./Chat.css";
import { AttachFile, SearchOutlined } from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";

function Chat() {
  const [SEED, setSEED] = useState("");
  useEffect(() => {
    setSEED(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar /> {/*src={`https://avatars.dicebear.com/api/human/${SEED}.svg`} */}
        <div className="chat__headerInfo">
            <h3> Room Name </h3>
            <p>Last Seen..</p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
