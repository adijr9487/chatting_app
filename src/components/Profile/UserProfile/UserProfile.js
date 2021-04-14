import React from 'react';

//classes
import classes from './UserProfile.css';

const UserProfile = (props) =>{

    let ProfileStyle ={
        backgroundImage: `url(${props.userData.imageUrl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }
    return (
        <div className={classes.UserProfile}>
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.Name}>
                {props.userData.name}
            </div>
            {/* <div className={classes.Username}>
                {props.userData.username}
            </div> */}
        </div>
    )
}

export default UserProfile;