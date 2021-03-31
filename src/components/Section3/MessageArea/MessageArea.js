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
    },
    {
      msg:
        "Hi Bill",
      time: "1:25PM",
      type: "send",
    },
    {
      msg:
        "Hi Bill",
      time: "1:25PM",
      type: "received",
    },
    {
      msg:
        "SE ka activity diagram wala",
      time: "1:25PM",
      type: "send",
    },
    {
      msg:
        "wo 15 ko dena tha na",
      time: "1:25PM",
      type: "received",
    },
    {
      msg:
        "bhai date change krke aaj ka kr diya h laude ne",
      time: "1:25PM",
      type: "send",
    },
    {
      msg:
        "Solo is a 2017 Indian experimental anthology film co-written, co-produced and directed by Bejoy Nambiar with Dulquer Salmaan in the lead role.",
      time: "1:25PM",
      type: "received",
    },
    {
      msg:
        "fallo jara ye check kar push nahi ho pa raha",
      time: "1:25PM",
      type: "send",
    },
    {
      msg:
        "bhai date change krke aaj ka kr diya h laude ne",
      time: "1:25PM",
      type: "send",
    },
    {
      msg:
        "Solo is a 2017 Indian experimental anthology film co-written, co-produced and directed by Bejoy Nambiar with Dulquer Salmaan in the lead role.",
      time: "1:25PM",
      type: "received",
    },
    {
      msg:
        "fallo jara ye check kar push nahi ho pa raha",
      time: "1:25PM",
      type: "send",
    },
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
