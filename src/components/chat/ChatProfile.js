import React, { useState } from "react";
import { ChatProfileSearch } from "./icons/ChatProfileSearch";
import { ChatProfileOptions } from "./icons/ChatProfileOptions";
import "./ChatProfile.css";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const ChatProfile = (props) => {
  // const [openModal, setOpenModal] = useState(false);

  const currentDialogId = useSelector((state) => {
    return state.dialogs.currentDialogId;
  });

  const dialogs = useSelector((state) => {
    return state.dialogs.dialogs;
  });

  const dialog = dialogs.find((dialog) => dialog.id === currentDialogId);

  // const openModalHandler = () => {
  //   setOpenModal(true);
  //   console.log('Modal Opened');
  // };

  return (
    <>
      <div onClick={props.open} className="chat-profile-container">
        <div className="chat-profile">
          <div className="chat-profile-image">
            <img src={dialog.avatar} />
          </div>
          <div className="chat-profile-name-container">
            <p className="chat-profile-name">{dialog.title}</p>
            <p className="chat-profile-connecting">در حال اتصال...</p>
          </div>
        </div>
        <div className="chat-profile-options-container">
          <div className="chat-profile-search">
            <ChatProfileSearch />
          </div>
          <div className="chat-profile-options">
            <ChatProfileOptions />
          </div>
        </div>
      </div>
      {/* {openModal && <Modal />} */}
    </>
  );
};

export default ChatProfile;
