import './MeetingStart.css';
import { JitsiMeeting } from '@jitsi/react-sdk';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { useRef, useState, useEffect} from 'react';





const MeetingStart = () => {
  
  const [sname] =  'https://jitsi.inscriptionsmw.com/'
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

 

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  const handleJitsiIFrameRef = iframeRef => {
    iframeRef.style.marginTop = '10px';
    iframeRef.style.border = '10px dashed #df486f';
    iframeRef.style.padding = '5px';
    iframeRef.style.height = '800px';
};


  
  return call ? (

    <JitsiMeeting
    
    roomName = {room}   
    getIFrameRef = { handleJitsiIFrameRef }
  />
  
    

  
  ) : (
    <div className='header '> 

        <Form className='Form '>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your alias</Form.Label>
            <Form.Control id='name' type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Meeting Name</Form.Label>
            <Form.Control id='room' type="text" placeholder="Enter Meeting Name" value={room} onChange={(e) => setRoom(e.target.value)} />
          </Form.Group>
   
          <Button variant="primary" onClick={handleClick}> 
            Start Meeting
          </Button>
        </Form>
     
    </div>
  );
}

export default MeetingStart;
