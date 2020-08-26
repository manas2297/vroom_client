import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../icons/back2.svg'
import axios from 'axios';
import './Join.css';
import CheckBox from '../../components/CheckBox';
import rules from '../../utils/validationRules';
import { Grid } from '@material-ui/core';
const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [privateRoom, setPrivate] = useState(false);
  const [roomDetails, setRoomDetails] = useState(null);
  const validateForm = (e) => {
    return rules[e.target.name].regex.test(e.target.value);
  }
  useEffect(() => {
    if(roomDetails) {
      props.history.push({
        pathname: `chat/${roomDetails.roomID}`,
        state:{
          room: roomDetails.roomName,
          name: roomDetails.userName,
          roomId: roomDetails.roomID,
        }
      })
    }
  }, [roomDetails])
  const createRoom = async () => {
    if(name && room) {
      const payload = {
        roomName: room,
        userName: name,
        privateRoom,
      };
      const roomDetails = await axios.post('http://localhost:5000/room/createRoom', payload);
      setRoomDetails(roomDetails.data);
    }
  }
  return (
    <div className="wrapper">
      <div className="container-1">
        <ReactLogo className="left-logo" />
        <div className="welcome-text">
          <h3>
            Welcome to VROOM!
        </h3>
        <hr/>

        </div>
      </div>
      <div className="container-2">
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Start Meeting</h1>
            <div>
              <input 
                placeholder="Enter Name" 
                className="joinInput" 
                name="name"
                type="text"
                onChange={(e) => {
                  if(validateForm(e))
                  setName(e.target.value)
                }} 
                value={name}
              />
                </div>
            <div>
              <input 
                placeholder="Room"
                className="joinInput mt-20" 
                type="text" 
                name="room"
                onChange={(e) => {
                  
                  setRoom(e.target.value)
                }}
                value={room}
              />
            </div>
            <Grid 
              container 
              spacing={1}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item> 
                <CheckBox 
                color="primary"
                onChange={(e) => {
                  setPrivate(e.target.checked);
                }} 
                checked={privateRoom}/>
              </Grid>
              <Grid item className="checkbox-label">
                Private Room
              </Grid>
            </Grid>
            <button 
              onClick={()=> {
                createRoom();
              }}
              className="button mt-20" 
              type="submit"
            >
                Sign In
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )

}
export default Join;