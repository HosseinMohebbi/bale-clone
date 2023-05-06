import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faTv,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBarContacts.css";
import {Concats} from "../icons/Concats"
import SideBarContactsSearch from "./SideBarContactsSearch";

const SideBarContacts = () => {
  return (
    <div className="sidebar-contacts">
      <SideBarContactsSearch />
      <div className="sidebar-connecting">
          <div className="sidebar-connecting-icon">
            <svg
              class="SideBar_LoaderIconView__1nkZN"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99991 15.3C12.4738 15.3 15.3 12.4739 15.3 9.00018C15.3 5.52625 12.4738 2.7 8.99991 2.7C5.52613 2.7 2.7 5.52625 2.7 9.00018C2.7 12.4739 5.52613 15.3 8.99991 15.3ZM8.99991 18C4.03242 18 0 13.9678 0 9.00018C0 4.02734 4.03242 0 8.99991 0C13.9726 0 18 4.02734 18 9.00018C18 13.9678 13.9726 18 8.99991 18Z"
                fill="#C1C7D0"
              ></path>
              <path
                d="M0 9.30209L2.648 9.36209C2.724 5.53709 5.241 2.73909 9.064 2.66809L9.181 0.121094C6.75683 0.155723 4.44167 1.13412 2.72735 2.84844C1.01303 4.56276 0.0346289 6.87792 0 9.30209H0Z"
                fill="#42526E"
              ></path>
            </svg>
          </div>
          <p className="sidebar-connecting-tag">در حال اتصال...</p>
        </div>
      <div className="sidebar-contacts-menu-container">
        <ul>
          <li className="sidebar-contacts-menu-item">
            <FontAwesomeIcon
              icon={faUsers}
              className="sidebar-contacts-menu-icon"
            />
            <p>ساخت کانال</p>
          </li>
          {/* <hr/> */}
          <li className="sidebar-contacts-menu-item">
            <FontAwesomeIcon
              icon={faTv}
              className="sidebar-contacts-menu-icon"
            />
            <p>ساخت کانال</p>
          </li>
          {/* <hr/> */}
          <li className="sidebar-contacts-menu-item">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="sidebar-contacts-menu-icon"
            />
            <p>افزودن مخاطب</p>
          </li>
          {/* <hr/> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBarContacts;
