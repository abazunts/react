import React from "react";
import Message from "./Message/message";
import Dialogitem from "./Dialogitem/dialogitem";
import s from "./mesages.module.css"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";
import Textarea from "../../textarea";
import {Route} from "react-router-dom";



const Messages = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <Dialogitem name={d.name} id={d.id} status={d.status}
                                                                        avatar={d.avatar}/>)

    let dialogsId = props.dialogsPage.dialogs.map((dialogsElement) => <div>{dialogsElement}</div> ) ;

    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} check={m.check}/>)



    let addMessage = () => {

        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }




    return (
        <div className={s.container__content}>

            <div className={s.dialogsElement}>
                <div className={s.status}>Dialogs</div>
                <div className={s.friends}>{dialogsElement}</div>
            </div>

            <div className={s.messagesElement}>


                <Route path={dialogsId} render={() => messagesElement}/>

            </div>
            <div className={s.messageAdd}>
                <div className={s.newmessage}>



                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage}
                          className={s.textarea} placeholder='Enter you message...'></textarea>


                    <button onClick={addMessage} className={s.button}>Send</button>
                </div>
            </div>




        </div>
    )
}

export default Messages;