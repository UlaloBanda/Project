import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '/home/ulalo/project/src/assests/sslogo.png';
import './forms.css';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {



  return (
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        
        <Form>
  <Form.Group className="sm-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Link to='/meeting'>
  <Button variant="primary" type="submit">
    Submit
  </Button>

  </Link>
  
</Form>

        <p>
          Don't have and account? 
        </p>
      </div>
    </div>
  );

}
export default Login;
