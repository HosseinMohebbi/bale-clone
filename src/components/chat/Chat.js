import React, {useState} from "react";
import ChatProfile from "./ChatProfile";
import ChatMessage from "./ChatMessage";
import { ChatSectionImage } from "../chat/icons/ChatSectionImage";
import "./Chat.css";
import Modal from "../Modal/Modal";

const Chat = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const openModalHandler = () => {
    setOpenModal(true);
    console.log('Model Open')
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="chat-container">
      <ChatProfile  open = {openModalHandler}/>
      {openModal && <Modal closeModal = {closeModalHandler}/>}
      <ChatMessage />
    </div>
  );
};

export default Chat;
