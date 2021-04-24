import React, {useState} from 'react'

//component
import menu from "./Util/menu"

//classes
import classes from "./TopOption.css"

const TopOption = (props) => {

    const [MenuColor, setMenuColor] = useState("white")
    let ImageStyle = {
        backgroundImage: `url(${props.friendData.imageurl || "https://i.stack.imgur.com/34AD2.jpg"})`
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
    console.log(props.friendData)

    return (
        <div className={classes.TopOption}>
            <div className={classes.DisplayProfile}>
                <div className={classes.Image} style={ImageStyle}></div>
            </div>
            <div className={classes.Name_LastSeen}>
                <div className={classes.Name}>
                    {props.friendData.name}
                </div>
                <div className={classes.LastSeen}>
                    {props.friendData.lastscene}
                </div>
            </div>
            <div onClick={clickHandler} className={classes.HamburgerMenu} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
                {menu(MenuColor, 15)}
            </div>
        </div>
    )
}

export default TopOption
