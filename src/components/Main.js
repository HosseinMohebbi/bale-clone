import React, { useEffect } from "react";
import "./Main.css"
import Navigation from "./navigation/Navigation";
import SideBar from "./sidebar/SideBar";
import Chat from "./chat/Chat";
import {DialogsActions, dialogsReducer} from "../store/dialogs/dialogs.slice"
import DefaultChat from "./chat/DefaultChat"
import { useDispatch, useSelector } from "react-redux";

const Main = () => {

    const dispatch = useDispatch();
    const current = useSelector((state) => {
        return state.dialogs.currentDialogId
    })

    useEffect(() => {
        const handler = (e) => {
            console.log(e.keyCode, e);
            if(current != null && e.code === 'Escape'){
                dispatch(DialogsActions.clearDialog())
            }
        };
        window.addEventListener('keyup', handler)
        return () => {
            window.removeEventListener('keyup', handler)
        };
    }, [current]);

    return <div className="main-container">
        <Navigation />
        <SideBar />
        {current == null && <DefaultChat />}
        {current != null && <Chat />}
    </div>
    
}

export default Main;