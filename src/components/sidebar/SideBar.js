import React, { useContext } from "react";
import SideBarBank from "./SideBarBank";
import SideBarChats from "./SideBarChats";
import SideBarContacts from "./SideBarContacts";
import SideBarContext from "./SideBarContext";
import SideBarProfile from "./SideBarProfile";

const SideBar = () => {

    const sideBarCtx = useContext(SideBarContext);

    return (
        <div>
            {sideBarCtx.showChats && <SideBarChats/>}
            {sideBarCtx.showProfile && <SideBarProfile/>}
            {sideBarCtx.showContacts && <SideBarContacts/>}
            {sideBarCtx.showBank && <SideBarBank/>}
        </div>  
    )
};

export default SideBar;