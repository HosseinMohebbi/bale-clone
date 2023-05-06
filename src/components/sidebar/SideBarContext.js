import React, { createContext, useState } from "react";

const SideBarContext = createContext({
  showChats: true,
  showProfile: false,
  showContacts: false,
  showBank: false,
  showChatsHandler: () => {},
  showProfileHandler: () => {},
  showContactsHandler: () => {},
  showBankHandler: () => {},
});

export const SideBarContextProvider = (props) => {
  const [{showChats, showProfile, showContacts, showBank }, setState] =
    useState({
      showChats: true,
      showProfile: false,
      showContacts: false,
      showBank: false,
    });

  const showChatsHandler = () => {
    setState((state) => {
      return {
        showChats: true,
        showProfile: false,
        showContacts: false,
        showBank: false,
      };
    });
  };

  const showProfileHandler = () => {
    setState((state) => {
      return {
        showChats: false,
        showProfile: true,
        showContacts: false,
        showBank: false,
      };
    });
  };

  const showContactsHandler = () => {
    setState((state) => {
      return {
        showChats: false,
        showProfile: false,
        showContacts: true,
        showBank: false,
      };
    });
  };

  const showBankHandler = () => {
    setState((state) => {
      return {
        showChats: false,
        showProfile: false,
        showContacts: false,
        showBank: true,
      };
    });
  };

  return <SideBarContext.Provider value={{showChats, showProfile, showContacts, showBank, showChatsHandler, showProfileHandler, showContactsHandler, showBankHandler}}>
    {props.children}
  </SideBarContext.Provider>
};

export default SideBarContext;