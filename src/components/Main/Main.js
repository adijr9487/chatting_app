import React , {useState, useEffect} from 'react'
import firebase from "../../Firebase"

//component
import Profile from '../Profile/Profile'
import Conversations from '../Conversations/Conversation'
import ContactInfo from "../ContactInfo/CantactInfo"
import Section3 from "../Section3/Section3"
import Setting from '../Setttings/Setting'

//classes
import classes from "./Main.css"

const Main = (props) => {

    const [showContact, setShowContact] = useState(false)
    const [userData, setUserData] = useState(null)
    const [activeConversation, setActiveConversation] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [showOption, setShowOption] = useState("conversation")
    const [isChanged, setIsChanged] = useState(false)

    const changeShowContactInfoHandler = () => {
        setShowContact(!showContact)
    }

    const conversationHandler = (friendUID, conversationUID) => {
        setActiveConversation({friendUID: friendUID, conversationUID: conversationUID})
        console.log({friendUID: friendUID, conversationUID: conversationUID})
    }



    useEffect(() => {
        
        //retriving data from database of user
        setIsLoading(true)
        const dbRef = firebase.database().ref();
        dbRef.child("Profiles").child(props.uid).get().then((user) => {
        if (user.exists()) {
            console.log(user.val())
            setUserData({
                ...user.val(),
            });
            setIsLoading(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
        setUserData({})

    }, [props.uid, isChanged])

    const changeShowOptionHandler = (type) => {
        setShowOption(type) 
    }

    return (
        isLoading ? <div className={classes.loading}><div className={classes.loader}></div></div> 
        :
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Profile}>
                <Profile userData={userData} logoutHandler={props.logoutHandler} ChangeShowOption={changeShowOptionHandler}  />
            </div>
            {/* row 2/ */}
            <div className={classes.Conversations}>
                {showOption === "conversation" ? <Conversations conversationUId={conversationHandler} userData={userData}/> : showOption === "setting" ? <Setting dbChanged={()=>setIsChanged(!isChanged)} userData={userData} /> : null}
            
            </div>
            {/* row 3/ */}
            <div className={classes.TextArea__TopOption}>
                <Section3  activeConversationData={activeConversation} userData={userData} changeShowContact={changeShowContactInfoHandler} />
            </div>
            {/* row 4/ */}
            <div style={{width: showContact ? "250px" : "0px"}}className={classes.ContactInfo}>
                <ContactInfo activeConversationData={activeConversation} userData={userData} />
            </div>
        </div>
    )
}

export default Main