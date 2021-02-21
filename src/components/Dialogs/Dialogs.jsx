import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message1";

const Dialogs = (props) => {


    let dialogsElements =
        props.appState.dialogsData.map(dialog => <DialogItem name ={dialog.name} id = {dialog.id}/>);

    let messagesElements =
        props.appState.messagesData.map(message => <Message message = {message.message}/>)

    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
