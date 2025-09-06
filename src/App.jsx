import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BlogDetails from './Pages/SingleBlog'
import ScrollToTop from './Components/ScrollToTop'
import GetInTouchModal from './Components/GetInTouch'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
          <Route path='/get-in-touch' element={<GetInTouchModal/>}/>
        </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
