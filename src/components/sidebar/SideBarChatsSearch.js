import React from "react";
import { Chats } from "../icons/Chats";
import "./SideBarChatsSearch.css";

const SideBarChatsSearch = () => {
  return (
    <div className="sidebar-chats-search-container">
      <div className="sidebar-chats-search-wrapper">
        <Chats size={24} />
        <input
          type="text"
          className="sidebar-chats-search"
          placeholder="جستجوی کانال، گروه و پیام..."
        ></input>
      </div>
    </div>
    
  );
};

export default SideBarChatsSearch;
