import React from "react";
import Message from "./Message/message";
import Dialogitem from "./Dialogitem/dialogitem";
import s from "./mesages.module.css"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Messages = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <Dialogitem name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {

        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <div className={s.container__content}>

            <div className={s.dialogsElement}>
                {/*<h2>Dialogs</h2>*/}
                {dialogsElement}
            </div>
            <div className={s.messagesElement}>
                {messagesElement}
            </div>
            <div className={s.messageAdd}>

                <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.newMessage}
                          className={s.textarea}></textarea>

                <button onClick={addMessage} className={s.button}>Send</button>
            </div>


        </div>
    )
}

export default Messages;