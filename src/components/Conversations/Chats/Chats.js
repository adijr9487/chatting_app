import React from 'react';

//classes
import classes from './Chats.css';
import Delivered from './Util/delivered';
// import Active from './Util/active';

const Chats = (props) =>{
    let ProfileStyle ={
        backgroundImage: "url(https://ep01.epimg.net/estaticos/arc/2021/02/entrevista/img/bill.jpg)"
    }

    return(
        <div className={classes.Chats}>
            <div className={classes.Profile}>
                <div style={ProfileStyle} className={classes.Image}>
                </div>
            </div>
            <div className={classes.name}>
                <p style={{ color:"#fff",marginBottom:"15px"}}>Juan Esteban Sarmiento</p>
                <div className={classes.delivered}>
                    <span>{Delivered(18,"grey")}</span>
                    <p style={{ color:"#c5c5c5"}}> Cool.</p>
                </div>
            </div>

            <div className={classes.time}>
                <p className={classes.read}>.</p>
                <p style={{marginTop:"25px"}}>3:57 PM</p>
            </div>
        </div>
    )
}

export default Chats;