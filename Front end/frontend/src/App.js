import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Repository from './components/Repository';
import Dropfiles from './components/Dropfiles'
import Arrange from './components/Arrange'
import Chess from './components/Chess/Chess'


function App() {

  const [logincheck,setlogincheck] =useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem('username')){
      setlogincheck(true)
    }
  },[])

  function loginchecking(){
    if(logincheck === true){
      return(
        <div>
          <li className='navitem_float_right'>
            <a onMouseOver="" style={{cursor: "pointer"}} onClick={logout} className='navlink_a'>Logout</a>
          </li>
          <li className='navitem_float_right'>
            <Link  to={'/profile'} className='navlink'>Profile</Link>
          </li>
          <li className='navitem_float_left'>
          <Link to={'/repository'} className='navlink'>Repository</Link>
          </li>
          <li className='navitem_float_left'>
            <Link to={'/arrange-scores'} className='navlink'>Arrange New Score</Link>
          </li>
          <li className='navitem_float_left'>
            <Link to={'/dropfiles'} className='navlink'>File Dump</Link>
          </li>
        </div>
      )
    }
    else{
      return(
        <li className='navitem_float_right'>
          <Link  to={'/login'} className='navlink'>Login</Link>
        </li>
      )
    }
  }

  const logout =()=>{
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div>
    <Router>
      <div className='navbar'>
        <li className='navitem_float_left'>
          <Link to={'/'} className='navlink'>Home</Link>
        </li>
        <li className='navitem_float_left'>
          <Link to={'chess'} className='navlink'>Chess</Link>
        </li>
        {loginchecking()}
      </div>
      <div className='bg'>
        <div className='maincon'>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/repository' element={<Repository/>}/>
            <Route path='/arrange-scores' element={<Arrange/>}/>
            <Route path='/dropfiles' element={<Dropfiles/>}/>
            <Route path='/chess' element={<Chess/>}/>
          </Routes>
          </DndProvider>
        </div>
      </div>
      <div className='footer'>
        <p /* style={{paddingLeft:'31rem',paddingRight:'28rem', float:'left'}} */>
        Chairperson: Alan Ang
        <span style={{'margin':'0.5rem'}}/>
        Email: ALAN002@e.ntu.edu.sg </p>
        <a href={'https://www.instagram.com/ntuguitarensemble/?hl=en'}>
          <img src='instagram.png' className='footerico'/>
        </a>
        <span style={{'margin':'0.5rem'}}/>
        {/* <div/> */}
        <a href={'https://www.youtube.com/c/NTUGuitarEnsemble'}>
          <img src='youtube.png' style={{width: '1.8rem', height: '1.5rem', paddingBottom: '0.5rem'}}/>
        </a>
      </div>
    </Router>
    <ToastContainer position='top-right' autoClose={1500} hideProgressBar={true} pauseOnFocusLoss pauseOnHover/>
    </div>
  );
}

export default App;
