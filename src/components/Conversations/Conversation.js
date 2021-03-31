import React from 'react';

import Chats from './Chats/Chats'
//classes
import classes from './Conversation.css';



const Conversation = (props) =>{
    return (
        <div className={classes.Conversation}>
            <div className={classes.Heading}>
                Conversations
            </div>
            {/* Search */}
            <div className={classes.search}>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className={classes.opt}>
                <div style={{marginLeft:"10px"}}>
                    Recent Chats
                </div>
                <div className={classes.new}>
                    + New Chat
                </div>
            </div>
            <div className={classes.Chat}>
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
            </div>
        </div>
    )
}

export default Conversation;