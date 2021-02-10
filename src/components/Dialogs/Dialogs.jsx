import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className = {s.dialog + ' ' + s.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className = {s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <DialogItem name = 'Yan' id = '1'/>
                <DialogItem name = 'Vova' id = '2'/>
                <DialogItem name = 'Kostya' id = '3'/>
                <DialogItem name = 'Mike' id = '4'/>
            </div>
            <div className = {s.messages}>
                <Message message = 'Hi'/>
                <Message message = 'Goodbye'/>
                <Message message = 'Hello'/>
                <Message message = 'Lol'/>
            </div>
        </div>
    )
}

export default Dialogs
