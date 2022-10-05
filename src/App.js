import { useEffect, useState } from 'react';
import './App.css';
import { Chat } from './components/Chat';
import { Sidebar } from './components/Sidebar';
import Pusher from "pusher-js";
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([]);
    useEffect(() =>{
    axios.get('/messages/sync').then((response) =>{
      console.log(response.data);
      setMessages(response.data)
    })
    },[])

  useEffect(() =>{
    
    var pusher = new Pusher('a5aa0b5fe7093aa17690', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">

   <Sidebar />
   <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
