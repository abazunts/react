import React from "react";
import s from './mesage.module.css'


const Message = (props) => {

    let addMessage = () => {

        if (props.check === "1") {
            return (
                <div className={s.messageleft}>{props.message}</div>
            )
        } else
            return (
                <div className={s.messageright}>{props.message}</div>
            )
    }
    return (


        <div className={s.messages}>
        <div>
            {props.name}
        </div>
            {addMessage()}
        </div>
    )
}

export default Message;