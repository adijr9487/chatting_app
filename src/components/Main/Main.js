import React from 'react'

//component
import ContactInfo from "../ContactInfo/CantactInfo"

//classes
import classes from "./Main.css"

const Main = (props) => {
    return (
        <div className={classes.Main}>
            {/* row 1/ */}
            <div className={classes.Box1}></div>
            {/* row 2/ */}
            <div className={classes.Box2}></div>
            {/* row 3/ */}
            <div className={classes.Box3}></div>
            {/* row 4/ */}
            <div className={classes.ContactInfo}>
                <ContactInfo />
            </div>
        </div>
    )
}

export default Main
