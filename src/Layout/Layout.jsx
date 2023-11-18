import React, { useState } from 'react';
import Home from './LayoutPages/Home'
import Header from './LayoutPages/Header'
import About from './LayoutPages/About'
import { motion } from 'framer-motion'
import { Spinner } from '@material-tailwind/react';
import Question from './LayoutPages/Question';
import AboutParent from './LayoutPages/AboutParent';





const Layout = () => {

  return (
    <div>
      <motion.div
        initial={{ display: "flex" }}
        animate={{ display: "none" }}
        exit={{ display: "flex" }}
        transition={{ delay: 2 }}
        className='absolute flex w-full h-screen justify-center items-center'>
        <Spinner />
      </motion.div>
      <motion.div
        initial={{ display: "none" }}
        animate={{ display: "block" }}
        exit={{ display: "none" }}
        transition={{ delay: 2 }}>
        <Header />
        <Home />
        <About />
        <Question/>
        <AboutParent/>
      </motion.div>
    </div>

  )
}

export default Layout