import React from 'react'

//components

//classes
import classes from "./About.css"

const About = (props) => {
    return (
        <div className={classes.About}>
            <div className={classes.container}>    
            <h2 className={classes.head}>
               About 
            </h2>
            <p className={classes.content}>
               I am the founder of Microsoft 
               I am richest person in the entire planet bloody jeff bezos.
            </p>
            </div>

            <div className={classes.container}>
            <h2 className={classes.head}>
                Contact
            </h2>
            <p className={classes.content}>
                165-231-123
            </p>
            </div>
        </div>
    )
}

export default About
