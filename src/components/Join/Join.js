import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css';
import { ReactComponent as ReactLogo } from '../../icons/back2.svg'
import rules from '../../utils/validationRules';
const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const validateForm = (e) => {
    return rules[e.target.name].regex.test(e.target.value);
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
            <h1 className="heading">Join</h1>
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
            {/* <Link onClick={(e)=>(!name && !room)? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}> */}
            <button 
              onClick={()=> {
                if(name && room)
                props.history.push({
                  pathname: '/chat',
                  state: {
                    name,
                    room,
                  }
                })
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