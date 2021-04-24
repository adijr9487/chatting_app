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
  }, [props.messageArray])

  return  (

    <ul ref={MessageArea} className={classes.MessageArea}>
      {!props.conversationData 
      ? <div className={classes.Init}> Select Any Conversation </div>
      : (props.messageArray
        ? props.messageArray.map((ele, index) => {
            return <Message key={index} type={(ele.authorUID === props.userData.uid) ? "send" : "received"} msg={ele.message} time={ele.time} />
          })
        : <div className={classes.Init}>
            No chat history
          </div>)}
    </ul>
  
  )

};

export default MessageArea;
