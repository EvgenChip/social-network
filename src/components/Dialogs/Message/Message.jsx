import React from "react";
import s from './../Dialogs.module.css'




const Message = (props) => {
    return (
        
        <div className=
            {s.message}>
            <img  src="https://lumpics.ru/wp-content/uploads/2019/11/messendzher-viber-status-soobshheniya-dostavleno-.png" />
            {props.message}</div>
            


    )
}

export default Message;