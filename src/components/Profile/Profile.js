import React from 'react';

// import Logout from './Logout/Logout';
import Messages from './Messages/Messages';
// import Settingss from './Settingss/Settingss';
import UserProfile from './UserProfile/UserProfile';

//classes
import classes from "./Profile.css";

const Profile = (props) =>{

    console.log(props.userData)

    return (
        <div className={classes.Profile}>
            {/* <Logout/>
            <Settingss/> */}
            <UserProfile userData={props.userData}/>
            <Messages logoutHandler={props.logoutHandler}/>
        </div>
    )
}

export default Profile;