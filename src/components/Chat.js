import MoreVert from '@mui/icons-material/MoreVert';
import Search from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react'
import "../Css/Chat.css"
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from "../axios"
export const Chat = ({messages}) => {
  const [input, setInput] = useState('')
    const sendMessage = async (e) => {
      e.preventDefault();
   await    axios.post('/messages/new', {
        message: input,
        name: "test",
        timestamp: "NAh",
        received: false,
        
      })
           setInput('')
    }
  return (
    <div className='chat' >
         <div className="chat__header">
            <Avatar />
    <div className="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last seen at ..</p>
    </div>
    <div className="chat__headerRight">
        <IconButton>
          <Search />  
        </IconButton>
        <IconButton>
        <AttachFileIcon />
        </IconButton>
        <IconButton>
            <MoreVert />
        </IconButton>

    </div>

         </div>
         <div className="chat__body">
               {messages.map((message) => (
            <p className={`chat__message ${message.received && "chat__reciever"}`}>
                <span className="chat__name">{message.name}</span>
                 {message.message}
                <span className="chat__timeStamp">{message.timestamp}</span>
                </p>
               ))}
                <p className='chat__message chat__reciever'>
                <span className="chat__name">Sunny</span>
                This is a message
                <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
               
         </div>
         <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text" />
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <MicIcon />
         </div>
    </div>
  )
}
