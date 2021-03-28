import React from 'react'

//components

//classes
import classes from "./Options.css"

//svg
import Delete from "./Util/delete"
import Block from "./Util/block"
import Mute from "./Util/mute"

const Options = (props) => {

    return (
        <div className={classes.Options}>
            <ul>
                <li className={classes.List}>
                    <div className={classes.Icon}>
                        {Mute(15, "white")}
                    </div>
                    <div className={classes.Option}>
                        Mute Chat
                    </div>
                </li>
                <li className={classes.List}>
                    <div className={classes.Icon}>
                        {Block(15, "white")}
                    </div>
                    <div className={classes.Option}>
                        Block
                    </div>
                </li>
                <li className={classes.List}>
                    <div className={classes.Icon}>
                        {Delete(15, "white")}
                    </div>
                    <div className={classes.Option}>
                        Delete Chat
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default Options
