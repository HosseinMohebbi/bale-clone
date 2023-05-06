import React from "react";
import Menu from "./Menu";

const MessageContext = () => {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("Right Click");
      }}
    >
    </div>
  );
}

export default MessageContext;
