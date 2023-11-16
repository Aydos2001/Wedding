import React from 'react'
import Home from './LayoutPages/Home'
import Header from './LayoutPages/Header'
import About from './LayoutPages/About'
import { motion, useScroll } from "framer-motion"
import Questionnaire from './LayoutPages/Questionare'




const Layout = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Questionnaire/>
    </div>
  )
}

export default Layout