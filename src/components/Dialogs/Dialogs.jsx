import React from "react";
import { Navigate, } from "react-router-dom"
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.messagePage
    let messagesElement = state.messagesData.map((message) => (
        <Message message={message.message} />
    ))
    let dialogsElement = state.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ))
    let newMessageText = state.newMessageText;

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageTextCreator(text)
    }
    let sendMessage = () => {
        props.sendMessageCreator()
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElement}</div>

            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            placeholder="Пиши сюда"
                            onChange={onMessageChange}
                            value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
        </div>
            </div>
        </div>
    )
};

export default Dialogs;