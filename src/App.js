import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeetingStart from './components/MeetingStart/MeetingStart';
import {  BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Profile from './components/Login/Profile'
import Register from './components/Login/Register'
import VerifyEmail from './components/Login/VerifyEmail';
import Login from './components/Login/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './components/Login/AuthContext'
import {auth} from './components/Login/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './components/Login/PrivateRoute'



function App() { 


  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])


  return (
    <Router>
       <div>
        <Header/>


        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/loginview' element={<Login/>}/>
        <Route path='/meeting' element={<MeetingStart/>}/>


      
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
        </Routes>  
      </AuthProvider>


  
      
    </div>

    </Router>
   
      

  );
}

export default App;
