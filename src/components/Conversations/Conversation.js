import React, {useState, useEffect} from 'react';
import firebase from "../../Firebase"

//component
import Chats from './Chats/Chats'
import NewChat from "./NewChat/NewChat"

//classes
import classes from './Conversation.css';



const Conversation = (props) =>{

    const [newFriend, setNewFriend] = useState(null)
    const [recentChat, setRecentChat] = useState(null)
    const [showData, setShowData] = useState("recentChat")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        recentChatHandler();
    }, [])

    const recentChatHandler = () => {
        firebase.database().ref(`Chats`).on("value", (users)=>{
            let data = users.val()
            let tempRecentChat = []
            console.log(props.userData)
            for(const key in data){
                console.log(key, data[key])
                console.log(key.indexOf(props.userData.uid))
                if(key.indexOf(props.userData.uid) === 0){
                    // console.log(key)
                    // console.log(key.length, props.userData.uid.length, key.length-props.userData.uid.length)
                    // console.log(key.slice(props.userData.uid.length, key.length))
                    let conversation ={
                        friendUID: key.slice(props.userData.uid.length, key.length),
                        convData: data[key],
                    }
                    tempRecentChat.push(conversation)
                }
            }
            console.log(tempRecentChat)
            setRecentChat(tempRecentChat)
        })
    }

    const sendRequestHandler = () => {
        
    }

    const newChatHandler = () => {
        if(newFriend){
            return 0;
        }
        console.log("newChatHandler")
        setIsLoading(true)

        let friendList = [];
        firebase.database().ref(`Contacts/${props.userData.uid}`).on('value', (users)=>{
            console.log(users.val())
        })

        firebase.database().ref(`Profiles`).on("value", (users)=>{
            let data = users.val()
            let allUser = []
            console.log(props.userData)
            for(const key in data){
                console.log(key, data[key])
                if(key === props.userData.uid){
                    continue;
                }
                let tempUser = {
                    ...data[key],
                    uid: key,
                }
                allUser.push(tempUser)
            }
            console.log(allUser)
            setNewFriend(allUser)
            setShowData("newChat")
            setIsLoading(false)
        })
    }

    return (
        <div className={classes.Conversation}>
            <div className={classes.Heading}>
                Conversations
            </div>
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
            {
            isLoading === true 
                ? <div>Loading....</div> 
                : (showData === "recentChat" 
                    ? <div className={classes.recentChat+" "+classes.Chat}></div>  
                    : (showData === "newChat" 
                        ? <div className={classes.newChat+" "+classes.Chat}>
                            {newFriend.map((ele, index)=>{
                                return <NewChat key={index} userData={ele}/>
                            })}
                          </div> 
                        : null))    
            }
        </div>
    )
}

export default Conversation;

