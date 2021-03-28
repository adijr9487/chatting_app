import React from 'react'

//components
import Display from "./Display/Display"
import About from "./About/About"
import Media from "./Media/Media"
import Options from "./Options/Options"

//classes
import classes from "./ContactInfo.css"


const CantactInfo = (props) => {
    return (
        <div className={classes.Contact_Info}>
            {/* toggler */}
            <Display />
            <About />
            <Media />
            <Options />
        </div>
    )
}

export default CantactInfo
