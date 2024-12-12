import React, { useState } from 'react'
import Axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'

const App = () => {




  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
</Routes>
</BrowserRouter>
    
    </>
  )
}

export default App