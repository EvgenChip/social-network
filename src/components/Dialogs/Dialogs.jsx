import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";















const Dialogs = (props) => {
    let messagesElement = props.messagesData.map(message => <Message message={message.message} /> );
    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElement}


            </div>


            <div className={s.messages}>
                {messagesElement}


            </div>
        </div>


    )

}

export default Dialogs;