import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Timer from './component-page/Timer'
import Login from './component-page/Login'

const App = () => {
  return (

    <div className='App'>
   
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="timer" element={<Timer/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App