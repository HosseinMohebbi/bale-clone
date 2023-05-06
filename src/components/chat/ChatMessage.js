import React, { useState } from "react";
import "./ChatMessage.css";
import { ChatCheckBox } from "../chat/icons/ChatCheckBox";
import { FooterPersonal } from "./FooterPersonal";
import { FooterChanal } from "./FooterChanal";
import { CheckedCheckBox } from "./icons/CheckedCheckBox";
import { useSelector } from "react-redux";
import Menu from "./context/Menu";
import clsx from "clsx";

const ChatMessage = (props) => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({x: 0, y: 0});
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [selectedMessageIds, setSelectedMessageIds] = useState([]);
  const currentDialog = useSelector((state) => state.dialogs.currentDialogId);
  const messages = useSelector(
    (state) => state.messaging.history[currentDialog] ?? []
  );

  //   const messageSubmitHadnler = (e) => {
  //     e.preventDefault();
  //     setChatMessages('');
  //   };

  const selectHandler = (id, message) => {
    setShowCheckBox((perv) => !perv);
    // if (!showCheckBox) {
    //   setSelectedMessageIds((prev) => [...prev, id]);
    // }else {
    //   selectedMessageIds.filter( (selectedMessageId) => selectedMessageId !== message.id)
    // }
  };

  // let showFooter = props.data.message.status === 1 ? <FooterPersonal/> : <FooterChanal/>
  // const onContextMenuHandler = (e) => {
  //   e.preventDefault();
  //   console.log("Right Click");
  //   setClicked(prev => !prev);
  //   setPoints({x: e.clientX, y: e.clientY})
  // };

  return (
    <div className="chat-message-container">
      <div className={clsx("chat-list", showCheckBox && "show-visibility")}>
        {messages.map((message) => {
          const isMessageSelected = selectedMessageIds.find(
            (selectedMessageId) => selectedMessageId === message.id
          );
          return (
            <div className="message-container">
              <div
                onClick={() => selectHandler(message.id)}
                className="chat-message-checkbox-wrapper"
              >
                {!isMessageSelected && <ChatCheckBox />}
                {isMessageSelected && <CheckedCheckBox />}
              </div>
              <div
                key={message.id}
                className="chat-message-wrapper"
                // onContextMenu={onContextMenuHandler}
                onContextMenu={(e) => {
                  e.preventDefault();
                  console.log("Right Clicked", e.pageX, e.pageY)
                  setClicked(prev => !prev);
                  setPoints({x: e.pageX, y: e.pageY})
                }}
              >
                <p className="chat-message">{message.text}</p>
                {clicked && <Menu bottom = {points.y} right = {points.x}/>}
              </div>
            </div>
          );
        })}
      </div>
      <FooterPersonal />
      {/* <FooterChanal /> */}
      {/* {showFooter} */}
    </div>
  );
};

export default ChatMessage;
