import React from "react";
import "./Menu.css";
// import { ReplyIcon } from "./icons/ReplyIcon";

const Menu = (props) => {
  return (
    <div className="mesaage-contextMenu-container" style={{bottom: props.bottom, right: props.right}}>
      <ul className="mesaage-contextMenu-ul">
        <li className="mesaage-contextMenu-li">
            {/* <ReplyIcon /> */}
            <p>پاسخ</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>ویرایش</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>بازارسال</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>رونوشت</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>فضای شخصی</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>پسند</p>
        </li>
        <li className="mesaage-contextMenu-li">
            <p>حذف</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
