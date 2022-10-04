import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Login from '../login/Login'
import Register from '../register/Register'

 const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/register" element={<Register />}/>




    </Routes>
    </>
    
  )
}

export default Rutas