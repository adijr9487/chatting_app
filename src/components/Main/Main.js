import React from 'react'

//component
import Profile from '../Profile/Profile'
import Conversations from '../Conversations/Conversation'
import ContactInfo from "../ContactInfo/CantactInfo"
//classes
import classes from "./Main.css"

const Main = (props) => {
    return (
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Profile}>
                <Profile/>
            </div>
            {/* row 2/ */}
            <div className={classes.Conversations}>
                <Conversations/>
            </div>
            {/* row 3/ */}
            <div className={classes.Box3}></div>
            {/* row 4/ */}
            <div className={classes.ContactInfo}>
                <ContactInfo />
            </div>
        </div>
    )
}

export default Main
