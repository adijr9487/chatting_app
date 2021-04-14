import React from 'react'
import classes from './Setting.css'


const Setting = (props) => {

    let ProfileStyle ={
        backgroundImage: "url(https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)"
    }

    return (
        <div className={classes.Setting}>
            {/* Heading */}
            <div className={classes.Heading}>
                Profile
            </div>
            
            {/* Profile Pic */}
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            
            {/* Name Part  */}
            <div className={classes.Name}>
                <div className={classes.Heading1}>
                    Your Name
                </div>

                <div className={classes.Name_Section}>
                    <div className={classes.Heading2}>
                        Regina Pollastro
                    </div>
                    
                    <div className={classes.edit}>
                        Edit
                    </div>
                </div>
            </div>
            {/* Text Part */}
            <div className={classes.text}>
                This is not your Username or pin. This name is visible to your Contacts
            </div>

            {/* About */}
            <div className={classes.about}>
                <div className={classes.Heading1}>
                    About
                </div>

                <div className={classes.Name_Section}>
                    <div className={classes.Heading2}>
                        Hey there!!
                    </div>
                    
                    <div className={classes.edit}>
                        Edit
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Setting
