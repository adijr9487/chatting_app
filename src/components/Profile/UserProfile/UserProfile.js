import React from 'react';

//classes
import classes from './UserProfile.css';

const UserProfile = (props) =>{

    let ProfileStyle ={
        backgroundImage: "url(https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"
    }
    return (
        <div className={classes.UserProfile}>
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.Name}>
                Regina Pollastro
            </div>
            <div className={classes.Username}>
                Regina_12
            </div>
        </div>
    )
}

export default UserProfile;