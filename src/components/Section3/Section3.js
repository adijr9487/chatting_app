import React from 'react'

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

    return (
        <div className={classes.Section3}>
            <TopOption changeShowContactInfo={showContactInfoHandler} />
            <MessageArea />
            <TextArea />
        </div>
    )
}

export default Section3
