import React from 'react';

// import Logout from './Logout/Logout';
import Messages from './Messages/Messages';
// import Settingss from './Settingss/Settingss';
import UserProfile from './UserProfile/UserProfile';

//classes
import classes from "./Profile.css";

const Profile = (props) =>{
    return (
        <div className={classes.Profile}>
            {/* <Logout/>
            <Settingss/> */}
            <UserProfile/>
            <Messages/>
        </div>
    )
}

export default Profile;