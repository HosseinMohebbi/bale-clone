import React, { useEffect, useState } from "react";
import "./SideBarChats.css";
import { fetchDialogs } from "../../store/dialogs/dialogs.actions";
import { useDispatch, useSelector } from "react-redux";
import { SideBarDialogs } from "./sideBarDialogs";
import {SideBarConnecting} from "../icons/sidebar/SideBarConnecting";
import SideBarChatsSearch from "./SideBarChatsSearch";


const SideBarChats = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => {
    return state.dialogs.dialogs;
  });
  useEffect(() => {
    dispatch(fetchDialogs());
  }, []);
  // const [showLeftArrow, setShowLeftArrow] = useState(true);
  // const [showRightArrow, setShowRightArrow] = useState(false);

  // const showLeftArrowHandler = () => {
  //   setShowLeftArrow(prevState => !prevState);
  //   setShowRightArrow(true);
  // };

  // const showRightArrowHandler = () => {
  //   setShowRightArrow(false);
  //   setShowLeftArrow(true);
  // };

  // const leftArrowStyle = "sidebar-chats-left-arrow";
  // const rightArrowStyle = "sidebar-chats-right-arrow-hide";
  // if(!showLeftArrow) {
  //   leftArrowStyle = "sidebar-chats-left-arrow-hide";
  //   rightArrowStyle = "sidebar-chats-right-arrow";
  // }

  return (
    <div className="sidebar-chats">
      <SideBarChatsSearch />
      <div className="sidebar-connecting">
        <div className="sidebar-connecting-icon">
          <SideBarConnecting />
        </div>
        <p className="sidebar-connecting-tag">در حال اتصال...</p>
      </div>
      <div className="sidebar-chats-tabs-container">
        {/* <div className="sidebar-chats-arrow-container">
          <div className={leftArrowStyle} onClick={showLeftArrowHandler}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2085 17.4163L7.79183 10.9997L14.2085 4.58301"
                stroke="#42526E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className={rightArrowStyle} onClick={showRightArrowHandler}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7915 4.58366L14.2082 11.0003L7.7915 17.417"
                stroke="#42526E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div> */}
        <div className="sidebar-chats-tabs">
          {/* <div className="sidebar-chats-tab">
            <p>وضعیت</p>
          </div> */}
          <div className="sidebar-chats-tab">
            <p>همه</p>
          </div>
          <div className="sidebar-chats-tab">
            <p>شخصی</p>
          </div>
          <div className="sidebar-chats-tab">
            <p>کانال</p>
          </div>
          <div className="sidebar-chats-tab">
            <p>گروه</p>
          </div>
          <div className="sidebar-chats-tab">
            <p>بازو</p>
          </div>
        </div>
        {dialogs.map((dialog) => {
          return (
            <SideBarDialogs
              key={dialog.id}
              data={dialog}
            />
          );
        })}
        {/* <div className="sidebar-chats-contacts">
          <div className="sidebar-chats-contact-container">
            <div className="sidebar-chats-contact-avatar"></div>
            <div className="sidebar-chats-contact-items">
              <div className="sidebar-chats-contact-firstRow">
                <div className="sidebar-chats-contact-name">{dummy_dialog[0].name}</div>
                <div className="sidebar-chats-contact-date">{dummy_dialog[0].date}</div>
              </div>
              <div className="sidebar-chats-contact-secondRow">
                <div className="sidebar-chats-contact-message">{dummy_dialog[0].message}</div>
                <div className="sidebar-chats-contact-seen"><FontAwesomeIcon icon={faCheck}/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-chats-contacts">
          <div className="sidebar-chats-contact-container">
            <div className="sidebar-chats-contact-avatar"></div>
            <div className="sidebar-chats-contact-items">
              <div className="sidebar-chats-contact-firstRow">
                <div className="sidebar-chats-contact-name">{dummy_dialog[1].name}</div>
                <div className="sidebar-chats-contact-date">{dummy_dialog[1].date}</div>
              </div>
              <div className="sidebar-chats-contact-secondRow">
                <div className="sidebar-chats-contact-message">{dummy_dialog[1].message}</div>
                <div className="sidebar-chats-contact-seen"><FontAwesomeIcon icon={faCheck}/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-chats-contacts">
          <div className="sidebar-chats-contact-container">
            <div className="sidebar-chats-contact-avatar"></div>
            <div className="sidebar-chats-contact-items">
              <div className="sidebar-chats-contact-firstRow">
                <div className="sidebar-chats-contact-name">{dummy_dialog[2].name}</div>
                <div className="sidebar-chats-contact-date">{dummy_dialog[2].date}</div>
              </div>
              <div className="sidebar-chats-contact-secondRow">
                <div className="sidebar-chats-contact-message">{dummy_dialog[2].message}</div>
                <div className="sidebar-chats-contact-seen"><FontAwesomeIcon icon={faCheck}/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-chats-contacts">
          <div className="sidebar-chats-contact-container">
            <div className="sidebar-chats-contact-avatar"></div>
            <div className="sidebar-chats-contact-items">
              <div className="sidebar-chats-contact-firstRow">
                <div className="sidebar-chats-contact-name">{dummy_dialog[3].name}</div>
                <div className="sidebar-chats-contact-date">{dummy_dialog[3].date}</div>
              </div>
              <div className="sidebar-chats-contact-secondRow">
                <div className="sidebar-chats-contact-message">{dummy_dialog[3].message}</div>
                <div className="sidebar-chats-contact-seen"><FontAwesomeIcon icon={faCheck}/></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideBarChats;
