import React , { useState , useEffect} from 'react'
import classes from './Setting.css'

import firebase from "../../Firebase"

const Setting = (props) => {

    const [nameChange, setNameChange] = useState(false);
    const [aboutChange, setAboutChange] = useState(false);
    const [userData, setUserData] = useState(null);
    
    const [nameInput, setNameInput] = useState(props.userData.name || "Unknown")
    const [aboutInput, setAboutInput] = useState(props.userData.about || "Hey there!")

    let ProfileStyle = {
        backgroundImage: `url(${props.userData.imageurl || "https://i.stack.imgur.com/34AD2.jpg"})`
    }

    const editEvent = (eventType) => {
        
        if(eventType === "name"){
            if(nameChange === true){
                firebase
                .database()
                .ref(`Profiles/${props.userData.uid}`)
                .set({
                    ...props.userData,
                    name: nameInput
                })
                .then(()=>{
                    props.dbChanged()
                })
            }
            else{
                setNameChange(!nameChange)
            }
        }else if(eventType === "about"){
            console.log(aboutInput)
            if(aboutChange === true){
                firebase
                .database()
                .ref(`Profiles/${props.userData.uid}`)
                .set({
                    ...props.userData,
                    about: aboutInput
                })
                .then(()=>{
                    props.dbChanged()
                })
            }
            else{
                setAboutChange(!aboutChange)
            }
        }

    }

    const inputChangeHandler = (e) => {
        console.log(e.target.name)
        if(e.target.name === "name"){
            setNameInput(e.target.value)
        }else if(e.target.name === "about"){
            setAboutInput(e.target.value)
        }
    }

    console.log(props.userData)
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
                    {nameChange 
                    ?   <input className={classes.form} value={nameInput} onChange={inputChangeHandler} type="text" name="name" />
                    :   <div className={classes.Heading2}>
                            {props.userData.name}
                        </div>
                    }
                    
                    
                    <div onClick={()=>editEvent("name")} className={classes.edit}>
                        {nameChange ? "Save" : "Edit"}
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
                    {aboutChange 
                    ?   <input className={classes.form} value={aboutInput} onChange={inputChangeHandler} type="text" name="about" />
                    :   <div className={classes.Heading2}>
                            {props.userData.about || "Hey there!"}
                        </div>
                    }
                    
                    
                    <div onClick={()=>editEvent("about")} className={classes.edit}>
                        {aboutChange ? "Save" : "Edit"}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Setting
