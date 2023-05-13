import React, { useSelector } from "react";
import "./Modal.css";
import { ModalClose } from "./icons/ModalClose";
import { ModalChat } from "./icons/ModalChat";
import { ModalOptions } from "./icons/ModalOptions";
import { ModalToggleChecked } from "./icons/ModalToggelChecked";

function Modal(props) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <div onClick={props.closeModal} className="modal-close">
            {/* <p onClick={props.closeModal}>x</p> */}
            <ModalClose />
          </div>
          <div className="modal-options">
            <ModalOptions />
          </div>
        </div>
        <div className="modal-profile-container">
          <div className="modal-profile">
            {/* <img src={dialog.avatar} /> */}
          </div>
          <div className="modal-userGroupInfo">
            <div className="modal-user-name">
              <p>حسین شیره جونی</p>
            </div>
            <div className="modal-user-lastseen">
              <p>7 دقیقه پیش اینجا بوده</p>
            </div>
          </div>
          <div className="modal-chat">
            <ModalChat />
          </div>
        </div>
        <div className="modal-userInfo-container">
          <div className="modal-userId-container">
            <div className="modal-userId-tag">نام کاربری</div>
            <div className="modal-userId">Shirejoni@</div>
          </div>
          <div className="modal-userInfo-wrapper">
            <div className="modal-userInfo-tag">درباره من</div>
            <div className="modal-userInfo">مثل اینکه کد میزنم!</div>
          </div>
        </div>
        <div className="Modal-notifications-container">
          <div className="Modal-notifications-tag">اعلان ها</div>
          <div className="Modal-notifications-check">
            <input
              type="checkbox"
              id="notification-toggle"
              className="notification-toggle-input"
            />
            <label
              htmlFor="notification-toggle"
              className="notification-toggle-lable"
            >
              <div className="notification-toggle-checked">
                <ModalToggleChecked />
              </div>
            </label>
          </div>
        </div>
        <div className="modal-files-wrapper">
          <div className="modal-files-container">
            <div className="modal-files-line"></div>
            <div className="modal-file">تصاویر</div>
            <div className="modal-file">ویدیوها</div>
            <div className="modal-file">فایل ها</div>
            <div className="modal-file">صوت ها</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
