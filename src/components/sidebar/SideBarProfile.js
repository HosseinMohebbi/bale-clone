import React from "react";
import "./SideBarProfile.css";
import {Profile} from "../icons/sidebar/Profile";
import { SideBarConnecting } from "../icons/sidebar/SideBarConnecting";
import { PersonalSpace } from "../icons/sidebar/personalSpace";
import { Setting } from "../icons/sidebar/Settings";
import { RoadMap } from "../icons/sidebar/RoadMap";
import { ErrorReport } from "../icons/sidebar/ErrorReport";

const SideBarProfile = () => {
  return (
    <div className="sidebar-profile">
      <div className="sidebar-profile-info">
        <div className="sidebar-profile-info-container">
          <div className="sidebar-profile-image">ح</div>
          <div className="sidebar-profile-name">
            <p>حسین</p>
          </div>
        </div>
      </div>
      <div className="sidebar-connecting">
        <div className="sidebar-connecting-icon">
          <SideBarConnecting />
        </div>
        <p className="sidebar-connecting-tag">در حال اتصال...</p>
      </div>
      <div className="sidebar-profile-menu">
        <ul>
          <li>
            <span>
              <Profile size={24} />
            </span>
            <span className="sidebar-profile-menu-name">حساب کاربری</span>
          </li>
          <li>
            <span>
              <PersonalSpace size={24} />
            </span>
            <span className="sidebar-profile-menu-name">فضای شخصی</span>
          </li>
          <li>
            <span>
              <Setting size={24} />
            </span>
            <span className="sidebar-profile-menu-name">تنظیمات</span>
          </li>
          <li>
            <span>
              <RoadMap size={24} />
            </span>
            <span className="sidebar-profile-menu-name">نقشه راه</span>
          </li>
          <li>
            <span>
              <ErrorReport size={24} />
            </span>
            <span className="sidebar-profile-menu-name">گزارش خطا</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarProfile;
