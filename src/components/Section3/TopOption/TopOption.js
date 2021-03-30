import React, {useState} from 'react'

//component
import menu from "./Util/menu"

//classes
import classes from "./TopOption.css"

const TopOption = (props) => {

    const [MenuColor, setMenuColor] = useState("white")
    let ImageStyle = {
        backgroundImage: "url(https://ep01.epimg.net/estaticos/arc/2021/02/entrevista/img/bill.jpg)"
    }

    const mouseOverHandler = (e) => {
        setMenuColor("#a7aec4");
    }
    const mouseLeaveHandler = (e) => {
        setMenuColor("white");
    }

    const clickHandler = (e) => {
        props.changeShowContactInfo()
    }

    return (
        <div className={classes.TopOption}>
            <div className={classes.DisplayProfile}>
                <div className={classes.Image} style={ImageStyle}></div>
            </div>
            <div className={classes.Name_LastSeen}>
                <div className={classes.Name}>
                    Bill Gates
                </div>
                <div className={classes.LastSeen}>
                    Last seen today at 1:30PM
                </div>
            </div>
            <div onClick={clickHandler} className={classes.HamburgerMenu} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
                {menu(MenuColor, 15)}
            </div>
        </div>
    )
}

export default TopOption
