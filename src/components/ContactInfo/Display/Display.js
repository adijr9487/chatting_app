import React from 'react'

//components

//classes
import classes from "./Display.css"

const Display = (props) => {

    let ImageStyle = {
        backgroundImage: "url(https://ep01.epimg.net/estaticos/arc/2021/02/entrevista/img/bill.jpg)"
    }

    return (
        <div className={classes.Display}>
            {/* heading
            profile
            name
            place */}
            <div className={classes.Heading}>
                Contact Info
            </div>
            <div className={classes.Profile}>
                <div style={ImageStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.Name}>
                Bill Gates
            </div>
            <div className={classes.Place}>
                Seattle
            </div>
        </div>
    )
}

export default Display
