import React , {useState, useEffect} from 'react'
import firebase from "../../Firebase"

//component
import Profile from '../Profile/Profile'
import Conversations from '../Conversations/Conversation'
import ContactInfo from "../ContactInfo/CantactInfo"
import Section3 from "../Section3/Section3"

//classes
import classes from "./Main.css"

const Main = (props) => {

    const [showContact, setShowContact] = useState(false)
    const [userData, setUserData] = useState(null)
    const [activeConversation, setActiveConversation] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const changeShowContactInfoHandler = () => {
        setShowContact(!showContact)
    }


    useEffect(() => {
        
        //retriving data from database of user
        console.log(props.uid)
        setIsLoading(true)
        const dbRef = firebase.database().ref();
        dbRef.child("Profiles").child(props.uid).get().then((user) => {
        if (user.exists()) {
            console.log(user.val());
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

    }, [props.uid])


    return (
        isLoading ? <div className={classes.loading}><div className={classes.loader}></div></div> 
        :
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Profile}>
                <Profile userData={userData} logoutHandler={props.logoutHandler}/>
            </div>
            {/* row 2/ */}
            <div className={classes.Conversations}>
                <Conversations userData={userData}/>
            </div>
            {/* row 3/ */}
            <div className={classes.TextArea__TopOption}>
                <Section3 userData={userData} changeShowContact={changeShowContactInfoHandler} />
            </div>
            {/* row 4/ */}
            <div style={{width: showContact ? "250px" : "0px"}}className={classes.ContactInfo}>
                <ContactInfo userData={userData} />
            </div>
        </div>
    )
}

export default Main
