import React, {useState} from 'react'

//component

//classes
import classes from "./TextArea.css"
import telegram from './Util/telegram'

const TextArea = (props) => {

    const [SendHover, setSendHover] = useState("#039be5")
    const [message, setMessage] = useState("")

    const mouseOverHandler = (e) => {
        setSendHover("white")
    }
    const mouseLeaveHandler = (e) => {
        setSendHover("#039be5")
    }

    const sendHandler = () => {
        if(message.length)
            props.sendMessage(message)
        setMessage("")
    }

    const enterHandler = (e) => {
        if(e.key === "Enter"){
            if(message.length)
                props.sendMessage(message)
            setMessage("")
        }
    }

    return (
        <div className={classes.TextArea}>
            <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} name="message" placeholder="Type a message..." onKeyPress={enterHandler}/>
            <div className={classes.Button} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
                {telegram(20, SendHover, sendHandler)}
            </div>
        </div>
    )
}

export default TextArea
