import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutUs from './Components/AboutUS/AboutUs.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='AboutUs' element={<AboutUs/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>


    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
