import React from "react";

//components
import Main from "./components/Main/Main"
import Conversation from './components/Conversations/Conversation';
import Chats from './components/Conversations/Chats/Chats'
import Setting from './components/Setttings/Setting'
import Aux from "./components/Utility/Auxiliary"

//classes

function App(props) {

  return (
    <Aux>
      <Main/>
    </Aux>
  );  
}

export default App;
