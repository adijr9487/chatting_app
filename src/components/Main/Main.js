import React , {useState} from 'react'

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
    const [showOption, setShowOption] = useState("conversation")

    const changeShowContactInfoHandler = () => {
        setShowContact(!showContact)
    }

    const changeShowOptionHandler = (type) => {
	
        setShowOption(type) 
    }

    return (
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Profile}>
                <Profile ChangeShowOption={changeShowOptionHandler}  />
            </div>
            {/* row 2/ */}
            <div className={classes.Conversations}>
                {showOption === "conversation" ? <Conversations /> : showOption === "setting" ? <Setting /> : null}
            </div>
            {/* row 3/ */}
            <div className={classes.TextArea__TopOption}>
                <Section3 changeShowContact={changeShowContactInfoHandler} />
            </div>
            {/* row 4/ */}
            <div style={{width: showContact ? "250px" : "0px"}}className={classes.ContactInfo}>
                <ContactInfo />
            </div>
        </div>
    )
}

export default Main
