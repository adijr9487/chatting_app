import React from 'react';

//classes
import classes from './Messages.css';

const Messages = () =>{
    return (
        <div className={classes.Messages}>
            <ul>
                <li className={classes.List+" "+classes.Current}>
                    <div className={classes.Option}>
                        Conversations
                    </div>
                </li>
                <li className={classes.List}>
                    <div className={classes.Option}>
                        Settings
                    </div>
                </li>
                <li className={classes.List}>
                    <div className={classes.Option}>
                        Logout
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Messages;