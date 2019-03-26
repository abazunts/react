import React from "react";
import Message from "./Message/message";
import Dialogitem from "./Dialogitem/dialogitem";
import s from "./mesages.module.css"
import {Route} from "react-router-dom";


const Messages = ({dialogsPage: {dialogs, messages, newMessage}, ...props}) => {
    let dialogsElement = dialogs.map(d => <Dialogitem name={d.name} id={d.id} status={d.status}
                                                                        avatar={d.avatar}/>)

    let dialogsId = dialogs.map((dialogsElement) => <div>{dialogsElement}</div>);

    let messagesElement = messages.map(m => <Message message={m.message} check={m.check}/>)


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    let addMessage = () => {
        props.addMessage();
    }

    let onKeyPressTextMessage = (event) => {
        let textArea = event.currentTarget;
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };


    return (
        <div className={s.containerContent}>
            <div className={s.dialogsElement}>
                <div className={s.title}>Dialogs</div>
                <div>{dialogsElement}</div>
            </div>
            <div className={s.messagesElement}>
                <Route path={dialogsId} render={() => messagesElement}/>
            </div>
            <div className={s.messageAdd}>
                <div className={s.newMessage}>
                <textarea onKeyUp={onKeyPressTextMessage} onChange={onMessageChange}
                          value={newMessage}
                          className={s.textarea} placeholder='Enter you message...'></textarea>
                    <button onClick={addMessage} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;