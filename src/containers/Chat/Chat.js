import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css'
import InfoBar from '../../components/Infobar/Infobar';
import Input from '../../components/Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../../components/TextContainer/TextContainer';
let socket;

const Chat = (props) => {
  const {
    location
  } = props;
  console.log(location);
  
  const [name, setName] = useState(location.state.name);
  const [room, setRoom] = useState(location.state.room);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://localhost:5000/';
  // useEffect(()=> {
  //   const {name, room} = queryString.parse(location.search);
  //   socket = io(ENDPOINT);
  //   setName(name);
  //   setRoom(room);
  //   socket.emit('join',{name, room},()=>{});
  //   return () => {
  //     socket.emit('disconnect');
  //     socket.off();
  //   }
  // }, [ENDPOINT, location.search, props.location]);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages([...messages, message])
  //   });
  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // },[]);
  
  const sendMesssage = (event) => {
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage',message, () => setMessage(''));
    }

  }
  console.log(message,messages)
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMesssage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
  )

}
export default Chat;