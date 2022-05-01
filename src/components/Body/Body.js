import React from 'react'
import './Body.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import lecturelogo from '/home/ulalo/project/src/assests/12352373.jpg';
import { Link, useNavigate } from "react-router-dom";


function Body() {


  return (
    <div className='wrapper'> 
     
     <div  class="grid-container">

        <div className="grid-child">
          <Card >
          <Card.Img variant="top" src={lecturelogo}/>
            <Card.Body>
               <Card.Title>Lecturer View</Card.Title>
             <Card.Text>
                Login as a lecture.
             </Card.Text>

             <Link to='/login'>
             <Button variant="primary">Proceed</Button>

             </Link>

             
          
           </Card.Body>
          </Card>
        </div>

     

     < div className="grid-child">
           <Card >
             <Card.Img variant="top" src={lecturelogo}/>
              <Card.Body>
                   <Card.Title>Student View</Card.Title>
                <Card.Text>
                  Login as a student.
                </Card.Text>
                   <Button variant="primary">Proceed</Button>
               </Card.Body>
            </Card>
      </div>

    </div>
      
    </div>
  );
}

export default Body;
