import React from 'react';

//classes
import classes from './NewChat.css';

const Chats = (props) =>{
    let ProfileStyle ={
        backgroundImage: `url(${props.friendData.imageurl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }
    // console.log(props.friendData)

    const requestHandler = () => {
        props.sendRequest(props.friendData.uid)
    }

    return(
        <div className={classes.NewChat}>
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.name}>
                <p style={{ color:"#fff",marginBottom:"15px"}}>{props.friendData.name}</p>
                <p style={{ color:"#ccc",marginBottom:"15px"}}>{props.friendData.email}</p>
            </div>
            <div>
                <p onClick={requestHandler} className={classes.Send}>Request</p>
            </div>
        </div>
    )
}

export default Chats;