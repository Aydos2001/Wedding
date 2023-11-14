import React from 'react'
import Home from './LayoutPages/Home'
import Header from './LayoutPages/Header'
import About from './LayoutPages/About'
import { motion, useScroll } from "framer-motion"


const Layout = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
    </div>
  )
}

export default Layout