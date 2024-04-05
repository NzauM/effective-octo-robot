import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTeachers from './Listteachers'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Viewcourse from './Viewcourse'
import Addcourse from './Addcourse'
import ListCourses from './Listcourses'
import Newcourse from './Newcourseform'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>
        <h1>Karibu to My App</h1>
      </div>}></Route>
        <Route path='/viewteachers' element={<> <h3>Courses List</h3>
      <ListCourses/></>}></Route>
      <Route path='/newcourse' element={<Newcourse/>}></Route>
      </Routes>
      <div className="card">
        <button> <Link to={'/'}>Home</Link></button>
        <button> <Link to={'/viewteachers'}>View Courses</Link></button>
        <button> <Link to={'/newcourse'}>Add a Course</Link></button>
      </div>
    </BrowserRouter>
  )
}

export default App
