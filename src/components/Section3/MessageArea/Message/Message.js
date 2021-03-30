import React from 'react'

//component

//classes
import classes from "./Message.css"

const Message = (props) => {

    let style = "";
    let liStyle = null;
    if(props.type === "received"){
        style = {
            borderTopLeftRadius: "0",
            backgroundColor: "#2438ae",
        }
    }else if(props.type === "send"){
        style = {
            borderTopRightRadius: "0",
            backgroundColor: "#17275f",
        }
        liStyle={
            justifyContent: "flex-end",
        }
    }

    return (
        <li style={liStyle} className={classes.Message}>
            <div style={style} className={classes.sar_11}>
                <p className={classes.text}>
                    {props.msg} 
                </p>
                <p className={classes.time}>
                    {props.time}
                </p>
            </div>
        </li>
    )
}

export default Message
