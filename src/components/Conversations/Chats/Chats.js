import React from 'react';

//classes
import classes from './Chats.css';
import Delivered from './Util/delivered';
// import Active from './Util/active';

const Chats = (props) =>{
    let ProfileStyle ={
        backgroundImage: `url(${props.friendData.imageUrl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }

    return(
        <div className={classes.Chats}>
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.name}>
                <p style={{ color:"#fff",marginBottom:"15px"}}>{props.friendData.name}</p>
                <div className={classes.delivered}>
                    <span>{Delivered(18,"grey")}</span>
                    <p style={{ color:"#c5c5c5"}}> {props.friendData.last}</p>
                </div>
            </div>

            <div className={classes.time}>
                <p className={classes.read}>.</p>
                <p style={{marginTop:"25px"}}>{props.friendData.time}</p>
            </div>
        </div>
    )
}

export default Chats;