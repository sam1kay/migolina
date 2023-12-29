import React from "react";
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
 import RegisterPage from './pages/registerPage/RegisterPage'
 import {Routes, Route, Router} from 'react-router-dom'
 

export default function App() {
  return (
   
   
  <>
 
  <Routes>

    <Route path='/' element={<Home/>}  />
    <Route path='profile' element={<Profile/>}  />

    <Route path='registerPage' />
   
  </Routes>
   

  </>
  
  )
}
