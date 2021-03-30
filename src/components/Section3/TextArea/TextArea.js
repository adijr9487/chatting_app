import React, {useState} from 'react'

//component

//classes
import classes from "./TextArea.css"
import telegram from './Util/telegram'

const TextArea = (props) => {

    const [SendHover, setSendHover] = useState("#039be5")

    const mouseOverHandler = (e) => {
        setSendHover("white")
    }
    const mouseLeaveHandler = (e) => {
        setSendHover("#039be5")
    }
    
    return (
        <div className={classes.TextArea}>
            <input type="text" name="message" placeholder="Type a message..."/>
            <div className={classes.Button} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
                {telegram(20, SendHover)}
            </div>
        </div>
    )
}

export default TextArea
