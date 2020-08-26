import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChatRoom from "./pages/ChatRoom";
import NewChatRoom from "./pages/NewChatRoom";
import { Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/chatroom">
          <ChatRoom />
        </Route>
        <Route path="/add-chatroom">
          <NewChatRoom />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
