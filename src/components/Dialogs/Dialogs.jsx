import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagePage-reducer'


const Dialogs = (props) => {
     let localState = props.dialogsPage
     
     let dialogsElements = localState.dialogsData.map( dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);
     let messageElements = localState.messageData.map (element => <Message message={element.message}/>);
     let newMessageBody =localState.newMessageBody;
     let onSendMessageClick = ()=>{
        props.sendMessage()
     };
     let onNewMessageChange = (i)=>{
        let body = i.target.value;
        props.updateNewMessageBody(body);
     };
    return(
        
        <div className={s.dialogs}>
            <div className={s.dialog_items} >
                { dialogsElements }
            
            </div>
            <div className={s.messages}>
               <div>{ messageElements }</div> 
               <div>
                   <div><textarea value={newMessageBody}
                                    onChange={onNewMessageChange} 
                                    placeholder ='your message'></textarea></div>
                   <div><button onClick={onSendMessageClick}>Send </button></div>
               </div>
            </div>
        </div>
    )
            
}

export default Dialogs