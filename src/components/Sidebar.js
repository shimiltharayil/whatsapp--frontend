import React from 'react';
import "../Css/Sidebar.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from './SidebarChat';
export const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="sidebar__header">
            <Avatar src=''/>
        <div className="sidebar__headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            

        </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchIcon />
                <input placeholder='Search or start new chat' type="text" />
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat />
        </div>
    </div>
  )
}
