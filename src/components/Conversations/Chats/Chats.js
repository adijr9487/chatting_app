import React from 'react';

//classes
import classes from './Chats.css';
import Delivered from './Util/delivered';
// import Active from './Util/active';

const Chats = (props) =>{
    
    let ProfileStyle ={
        backgroundImage: `url(${props.friendData.imageurl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }

    const requestHandler = () => {
        //this is clicked by home user with ---uid of request sending user
        // return uid of both user 
        console.log(props.friendData)
        props.request(props.friendData.uid)
    }

    return(
        <div onClick={()=>{props.conversationActive && props.conversationActive(props.friendData.uid, props.friendData.conversationUID)}} className={ (props.isActive === props.friendData.uid) ? (classes.Chats +" "+ classes.Active) : classes.Chats} >
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.name}>
                <p style={{ color:"#fff",marginBottom:"15px"}}>{props.friendData.name}</p>
                {(!props.pending && !props.requested) ? <p className={classes.lastMessage}>{props.friendData.lastmsg}</p> : <p style={{ color:"#c5c5c5"}}> {props.friendData.email}</p>}

            </div>

            {(props.pending 
                ? <p className={classes.pending}>pending</p> 
                : (props.requested 
                    ? <p onClick={requestHandler} className={classes.requested}>requested</p> 
                    : (<div className={classes.time}>
                            <p className={classes.read}>.</p>
                            <p style={{marginTop:"25px"}}>{props.friendData.time}</p>
                        </div>)
                    )
            )}

        </div>
    )
}

export default Chats;