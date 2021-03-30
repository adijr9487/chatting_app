import React, {useEffect, useRef} from "react";

//component
import Message from "./Message/Message";

//classes
import classes from "./MessageArea.css";

const MessageArea = (props) => {

  const MessageArea = useRef(null)

  useEffect(()=>{
    console.log(MessageArea.current)
    MessageArea.current.scrollTo(0, MessageArea.current.scrollHeight)
  }, [])

  let messageArray = [
    {
      msg:
        "Hi Bill",
      time: "1:25PM",
      type: "received",
    }
  ];

  return (
    <ul ref={MessageArea} className={classes.MessageArea}>
    {
        messageArray.map((ele, index) => {
            return <Message key={index} type={ele.type} msg={ele.msg} time={ele.time} />
        })
    }
        
    </ul>
  );
};

export default MessageArea;
