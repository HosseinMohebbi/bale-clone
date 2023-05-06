import React, { useContext } from "react";
import {NavigationProfile} from "./icons/NavigationProfile";
import {NavigationChats} from "./icons/NavigationChats";
import {NavigationConcats} from "./icons/NavigationConcats";
import {NavigationMyBank} from "./icons/NavigationMyBank";
import { NavigationShop } from "./icons/NavigationShop";
import "./Navigation.css";
import SideBarContext from "../sidebar/SideBarContext";

const Navigation = () => {

  const sideBarCtx = useContext(SideBarContext);


  return (
    <div className="navigation">
      <div className="navigation-icons-container">
        <div className="nav-icon profile-icon" onClick={sideBarCtx.showProfileHandler}>
          <NavigationProfile />
          <div className="profile">
            <p>پروفایل</p>
          </div>
        </div>
        <div className="nav-icon chats-icon" onClick={sideBarCtx.showChatsHandler}>
            <NavigationChats />
            <div className="chats">
              <p>گفتگوها</p>
            </div>
          </div>
          <div className="nav-icon contacts-icon" onClick={sideBarCtx.showContactsHandler}>
            <NavigationConcats />
            <div className="contacts">
              <p>مخاطبین</p>
            </div>
          </div>
          <div className="nav-icon bank-icon" onClick={sideBarCtx.showBankHandler}>
            <NavigationMyBank />
            <div className="bank">
              <p>بانک من</p>
            </div>
          </div>
          <div className="nav-icon bank-icon">
            <NavigationShop />
            <div className="bank">
              <p>فروشگاه</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navigation;
