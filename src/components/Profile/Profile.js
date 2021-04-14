import React from 'react';

// import Logout from './Logout/Logout';
import Messages from './Messages/Messages';
// import Settingss from './Settingss/Settingss';
import UserProfile from './UserProfile/UserProfile';

//classes
import classes from "./Profile.css";

const Profile = (props) =>{
    const changeShowOptionHandler = (type) => {
        props.ChangeShowOption(type)
    }

    return (
        <div className={classes.Profile}>
            {/* <Logout/>
            <Settingss/> */}
            <UserProfile/>
            <Messages changeShowOption={changeShowOptionHandler} />
        </div>
    )
}

export default Profile;