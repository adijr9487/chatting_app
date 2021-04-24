import React, { useState, useEffect } from 'react'


//components
import firebase from "../../Firebase"
import Display from "./Display/Display"
import About from "./About/About"
import Media from "./Media/Media"
import Options from "./Options/Options"

//classes
import classes from "./ContactInfo.css"


const CantactInfo = (props) => {
    
    const [friendData, setFriendData] = useState(null)

    useEffect(()=>{

        //retrive friend info(contact info)
        if(props.activeConversationData){
            firebase.database().ref(`Profiles/${props.activeConversationData.friendUID}`).on("value", (user)=>{
                if(user.val()){
                    console.log(user.val())
                    setFriendData(user.val())
                }else{
                    setFriendData(null)
                }
            })
        }

    }, [props.activeConversationData])
    // console.log(friendData)
    return (props.activeConversationData&&friendData) && <div className={classes.Contact_Info}>
            {/* toggler */}
            <Display friendData={friendData}/>
            <About about={friendData.about}/>
            {/* <Media /> */}
            <Options />
            </div>

}

export default CantactInfo
