import React , {useState} from 'react'

//component
import ContactInfo from "../ContactInfo/CantactInfo"
import Section3 from "../Section3/Section3"

//classes
import classes from "./Main.css"

const Main = (props) => {

    const [showContact, setShowContact] = useState(false)

    const changeShowContactInfoHandler = () => {
        setShowContact(!showContact)
    }

    return (
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Box1}></div>
            {/* row 2/ */}
            <div className={classes.Box2}></div>
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
