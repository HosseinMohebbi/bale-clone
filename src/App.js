import React from "react";
import Main from "./components/Main";
import "./App.css";
import { SideBarContextProvider } from "./components/sidebar/SideBarContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MessageContext from "./components/chat/context/MessageContext";


function App() {
  return (
    <Provider store={store}>
      <SideBarContextProvider>
        <div className="App">
          <Main />
          <MessageContext/>
        </div>
      </SideBarContextProvider>
    </Provider>
    
  );
}

export default App;
