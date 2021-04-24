import React , {useState, useEffect} from 'react'
import firebase from "../../Firebase"

//component
import TopOption from "./TopOption/TopOption"
import MessageArea from "./MessageArea/MessageArea"
import TextArea from './TextArea/TextArea'

//classes
import classes from "./Section3.css"

const Section3 = (props) => {

    const showContactInfoHandler = () => {
        props.changeShowContact()
    }
    const [messageArray, setMessageArray] = useState(null)
    const [friendData, setFriendData] = useState(null)
    const [last, setLast] = useState(null)

    useEffect(() => {
        // console.log(props.activeConversationData)
        if(props.activeConversationData){
            // if it is not null
            //retrieve messages from database
            firebase.database().ref(`Chats/${props.activeConversationData.conversationUID}`).on("value", (user)=>{
                if(user.val().messages){
                    // console.log(user.val().messages)
                    let allMessageArray = []
                    for(var i in user.val().messages){
                        // console.log(user.val().messages[i])

                        let tempMessageArray = {
                            ...user.val().messages[i],
                        }
                        
                        allMessageArray.push(tempMessageArray)
                    }
                    console.log(allMessageArray)
                    setMessageArray(allMessageArray)
                }else{
                    setMessageArray(null)
                }
            })

            //retrive friend info(contact info)
            firebase.database().ref(`Profiles/${props.activeConversationData.friendUID}`).on("value", (user)=>{
                if(user.val()){
                    // console.log(user.val())
                    setFriendData(user.val())
                }else{
                    setFriendData(null)
                }
            })
        }

    }, [props.activeConversationData, last])



    const sendMessageHandler = (message) => {
        let time = new Date()
        let currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        // console.log(currentTime)
        firebase
        .database()
        .ref(`Chats/${props.activeConversationData.conversationUID}/messages/${time.getTime()}`)
        .set({
            message: message,
            authorUID: props.userData.uid,
            time: currentTime,
        })
        .then(()=>{
            setLast(time)
        })
        
        // for friend retrieve 

        firebase
        .database()
        .ref(`Chats/${props.activeConversationData.friendUID}${props.userData.uid}/messages/${time.getTime()}`)
        .set({
            message: message,
            authorUID: props.userData.uid, 
            time: currentTime,
        })
        .then(()=>{
            setLast(time)
        })
        
        
        uploadMessage();
    }

    const uploadMessage = () => {

    }

    return (
        <div className={classes.Section3}>
            {(props.activeConversationData && friendData) && <TopOption friendData={friendData} changeShowContactInfo={showContactInfoHandler} />}
            <MessageArea messageArray={messageArray} conversationData={props.activeConversationData} userData={props.userData}/>
            {(props.activeConversationData && friendData)&& <TextArea sendMessage={sendMessageHandler}/>}
        </div>
    )
}

export default Section3


