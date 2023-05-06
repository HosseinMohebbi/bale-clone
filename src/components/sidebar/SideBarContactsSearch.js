import React from "react";
import {Concats} from "../icons/Concats"
import "./SideBarContactsSearch.css";

const SideBarContactsSearch = () => {
  return (
    <div className="sidebar-contacts-search-container">
      <div className="sidebar-contacts-search-wrapper">
        <Concats size={24} />
        <input
          type="text"
          className="sidebar-contacts-search"
          placeholder="جستجوی مخاطب..."
        ></input>
      </div>
    </div>
  );
};

export default SideBarContactsSearch;
