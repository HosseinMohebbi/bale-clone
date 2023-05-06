import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./SideBarDialogs.css";
import { useDispatch } from "react-redux";
import { DialogsActions } from "../../store/dialogs/dialogs.slice";

export const SideBarDialogs = (props) => {
  const dispatch = useDispatch();
  const dialogOnClickHandler = () => {
    dispatch(DialogsActions.setCurrentDialog(props.data.id));
  };

  const unSeenHandler = () => {
    if (!props.data.message.isOut) {
      return (
        <div className="sidebar-chats-contact-unseen">{props.data.unseen}</div>
      );
    } else if (props.data.message.status === "seen") {
      return (
        <div className="sidebar-chats-contact-seen">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      );
    } else if (props.data.message.status === "unseen") {
      return (
        <div className="sidebar-chats-contact-seen">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      );
    }
    return null;
  };
  return (
    <div onClick={dialogOnClickHandler} className="sidebar-chats-contacts">
      <div className="sidebar-chats-contact-container">
        <div className="sidebar-chats-contact-avatar">
          <img src={props.data.avatar} />
        </div>
        <div className="sidebar-chats-contact-items">
          <div className="sidebar-chats-contact-firstRow">
            <div className="sidebar-chats-contact-name">{props.data.title}</div>
            <div className="sidebar-chats-contact-date">
              {props.data.message.date}
            </div>
          </div>
          <div className="sidebar-chats-contact-secondRow">
            <div className="sidebar-chats-contact-message">
              {props.data.message.text}
            </div>
            {unSeenHandler()}
          </div>
        </div>
      </div>
    </div>
  );
};
