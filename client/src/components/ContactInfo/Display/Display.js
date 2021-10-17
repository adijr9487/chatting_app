import React from 'react'

//components

//classes
import classes from "./Display.css"

const Display = (props) => {

    let ImageStyle = {
        backgroundImage: `url(${props.friendData.imageurl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }

    return (
        <div className={classes.Display}>
            {/* heading
            profile
            name
            place */}
            <div className={classes.Heading}>
                Contact Info
            </div>
            <div className={classes.Profile}>
                <div style={ImageStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.Name}>
                {props.friendData.name}
            </div>
        </div>
    )
}

export default Display
