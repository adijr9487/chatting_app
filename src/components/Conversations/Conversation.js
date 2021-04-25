import React, { useState, useEffect } from "react";
import firebase from "../../Firebase";

//component
import Chats from "./Chats/Chats";
import NewChat from "./NewChat/NewChat";

//classes
import classes from "./Conversation.css";
import { isCompositeComponent } from "react-dom/test-utils";

const Conversation = (props) => {
  const [newFriend, setNewFriend] = useState(null)
  const [showData, setShowData] = useState("recentChat")
  const [isLoading, setIsLoading] = useState(false)
  const [recentChat, setRecentChat] = useState(null)
  const [requested, setRequested] = useState(null)
  const [pending, setPending] = useState(null)
  const [conversationActive, setConversationActive] = useState(null)

  useEffect(() => {
    recentChatHandler();
  }, []);

  const conversationActiveHandler = (friendUID, conversationUID) => {
    setConversationActive(friendUID, conversationUID)
    props.conversationUId(friendUID, conversationUID)
  }

  const recentChatHandler = () => {
    setIsLoading(true);
    firebase
      .database()
      .ref(`Chats`)
      .on("value", (users) => {
        let data = users.val();
        let tempRecentChat = [];
        let tempPendingChat = [];
        let tempRequestedChat = [];
        let tempRecentObj = "";
        let userData = ""
        // console.log(props.userData);
        for (const key in data) {
          if (key.indexOf(props.userData.uid) === 0) {
            let friendUID = key.slice(props.userData.uid.length, key.length);
              userData = {
                conversationUID: key,
                lastmsg: data[key].lastmgs,
                time: data[key].time
            }
            tempRecentObj = {
              ...tempRecentObj,
              [friendUID]: {
                conversationUID: key,
                lastmsg: data[key].lastmgs,
                time: data[key].time
              }
            }
          tempRecentChat.push(friendUID);
          
          }
        }
        console.log(tempRecentObj)
        firebase
        .database()
        .ref(`Chat Requests/`)
        .on("value", (users) => {
          console.log(users.val())
          for(let key in users.val()){
            if(key === props.userData.uid){
              
              for(let friendUID in users.val()[props.userData.uid]){
                
                if(users.val()[props.userData.uid][friendUID].request_type === "send"){
                  tempPendingChat.push(friendUID)
                }else if(users.val()[props.userData.uid][friendUID].request_type === "received"){
                  tempRequestedChat.push(friendUID)
                }
                
                console.log(key, users.val()[props.userData.uid])

              }

            }
          }
          
          if (tempPendingChat.length) {
            firebase
              .database()
              .ref(`Profiles/`)
              .on("value", (users) => {
                let allUser = [];
                for (const key in users.val()) {
                  if (tempPendingChat.indexOf(key) !== -1) {
                    allUser.push(users.val()[key]);
                    console.log()
                  }
                }
                setPending(allUser);
              });
          }
          else{
              setPending(null);
          }
          if (tempRequestedChat.length) {
            firebase
              .database()
              .ref(`Profiles/`)
              .on("value", (users) => {
                let allUser = [];
                for (const key in users.val()) {
                  if (tempRequestedChat.indexOf(key) !== -1) {
                    allUser.push(users.val()[key]);
                  }
                }
                setRequested(allUser);
              });
          }else{
              setRequested(null);
          }
          console.log(tempPendingChat)
          console.log(tempRequestedChat )
        })

        // console.log(tempRecentChat, tempPendingChat, tempRequestedChat);
        if (tempRecentChat.length) {
          firebase
            .database()
            .ref(`Profiles/`)
            .on("value", (users) => {
              let allUser = [];
              for (const key in users.val()) {
                  if (tempRecentChat.indexOf(key) !== -1) {
                    // console.log(users.val()[key]);
                    console.log(users.val()[key])
                  allUser.push({
                    ...users.val()[key],
                    // ...userData
                    ...tempRecentObj.key
                  });
                }
              }
              // console.log(allUser)
              setRecentChat(allUser);
            });
        }else{
            setRecentChat(null);
        }
        
        setShowData("recentChat");
      });
    setIsLoading(false);
  };

  const sendRequestHandler = (friendUID) => {
    firebase
      .database()
      .ref(`Chat Requests/${props.userData.uid}/${friendUID}`)
      .set({
        request_type: "send",
      });
    firebase
      .database()
      .ref(`Chat Requests/${friendUID}/${props.userData.uid}`)
      .set({
        request_type: "received",
      });
  };

  const requestHandler = (friendUID) => {
    
    firebase
      .database()
      .ref(`Chats/${props.userData.uid + friendUID}`)
      .set({
        lastmgs: "Now you can send messages to your friend",
        messages: "",
        time: "",
      })
    firebase
      .database()
      .ref(`Chats/${friendUID + props.userData.uid}`)
      .set({
        lastmgs: "Now you can send messages to your friend",
        messages: "",
        time: "",
      })

    firebase.database().ref().child(`Chat Requests/${props.userData.uid}/${friendUID}`).remove().then(()=>{
      firebase.database().ref().child(`Chat Requests/${friendUID}/${props.userData.uid}`).remove().then(()=>{
        recentChatHandler();
      })
    })

  };

  const newChatHandler = () => {
    // if(!newFriend){
    //     return 0;
    // }
    // console.log("newChatHandler");
    setIsLoading(true);
    let tempFriendUID = [];
    if (recentChat)
      recentChat.forEach((ele) => {
        tempFriendUID.push(ele.uid);
      });
    // console.log(tempFriendUID);
    firebase
      .database()
      .ref(`Profiles`)
      .on("value", (users) => {
        let data = users.val();
        let allUser = [];
        // console.log(props.userData);
        for (const key in data) {
          //   console.log(key, data[key]);
          if (key === props.userData.uid) {
            continue;
          } else if (tempFriendUID.indexOf(key) !== -1) {
            continue;
          }
          let tempUser = {
            ...data[key],
            uid: key,
          };
          allUser.push(tempUser);
        }
        // console.log(allUser);
        setNewFriend(allUser);
        setShowData("newChat");
        setIsLoading(false);
      });
  };

  let showUserChat = "";

  if (showData === "recentChat") {
      // console.log(recentChat)
    showUserChat = (
      <div className={classes.recentChat + " " + classes.Chat}>
        {recentChat &&
          recentChat.map(ele => {
              // console.log(ele)
            return <Chats isActive={conversationActive} conversationActive={conversationActiveHandler} key={ele.uid} friendData={ele} uid={ele.uid} />;
          })}
        {requested &&
          requested.map(ele => {
            return (
              <Chats
                request={requestHandler}
                requested
                key={ele.uid}
                friendData={ele}
              />
            );
          })}
        {pending &&
          pending.map(ele => {
            return <Chats pending key={ele.uid} friendData={ele} />;
            // <Pending />
          })}
      </div>
    );
  } else if (showData === "newChat") {
    showUserChat = (
      <div className={classes.newChat + " " + classes.Chat}>
        {newFriend.map((ele, index) => {
          return (
            <NewChat
              sendRequest={sendRequestHandler}
              key={index}
              friendData={ele}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className={classes.Conversation}>
      <div className={classes.Heading}>Conversations</div>
      {/* Search */}
      <div className={classes.search}>
        <input type="text" placeholder="Search"></input>
      </div>
      <div className={classes.opt}>
        <div onClick={recentChatHandler} className={classes.recent}>
          Recent Chats
        </div>
        <div onClick={newChatHandler} className={classes.new}>
          + New Chat
        </div>
      </div>
      {/* <Chats friendData={{imageUrl: "", name: "Bill Gates", lastMessage: "hi"}}/> */}
      {isLoading === true ? <div>Loading..</div> : showUserChat}
    </div>
  );
};

export default Conversation;


