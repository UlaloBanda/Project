import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeetingStart from './components/MeetingStart/MeetingStart';
import Login from './components/Login/Login';

import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() { 
  return (
    <Router>
       <div>
        <Header/>

      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/meeting' element={<MeetingStart/>}/>


      </Routes>
  
      
    </div>

    </Router>
   
      

  );
}

export default App;
