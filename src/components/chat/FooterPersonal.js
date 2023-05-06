import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MessagingActions } from "../../store/messaging/messaging.slice";
import { ChatMessageVoice } from "./icons/ChatMessageVoice";
import { ChatMessageEmoji } from "./icons/ChatMessageEmoji";
import { ChatMessageAddFile } from "./icons/ChatMessageAddFile";
import "./Footer.css";
import { current } from "@reduxjs/toolkit";

export const FooterPersonal = () => {
  const dispatch = useDispatch();
  const currentDialog = useSelector((state) => state.dialogs.currentDialogId);

  const [message, setMessage] = useState("");

  const messageOnChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const messageOnKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      /*send message in chat*/
      dispatch(
        MessagingActions.sendMessage({
          text: message,
          dialogId: currentDialog,
        })
      );
      setMessage("");
    }
  };

  return (
    <div className="chat-message-footer">
      <div className="chat-message-voice-icon">
        <ChatMessageVoice />
      </div>
      {/* <form onSubmit={messageSubmitHadnler} onKeyDown={messageHandler}> */}
      <input
        type="text"
        id="message"
        placeholder="پیام خود را بنویسید..."
        className="chat-message-input"
        onKeyUp={messageOnKeyUpHandler}
        onChange={messageOnChangeHandler}
        value={message}
      />
      {/* </form> */}
      <div className="chat-message-emoji-icon">
        <ChatMessageEmoji />
      </div>
      <div className="chat-message-addfile-icon">
        <ChatMessageAddFile />
      </div>
    </div>
  );
};
