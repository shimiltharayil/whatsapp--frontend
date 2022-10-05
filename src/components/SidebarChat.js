import { Avatar } from '@mui/material';
import React from 'react'
import "../Css/SidebarChat.css"

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
         <Avatar />
         <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>last dm</p>
         </div>
    </div>
  )
}

export default SidebarChat