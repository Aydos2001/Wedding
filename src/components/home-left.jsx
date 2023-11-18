import React from 'react'
import homeShape1 from "../images/home-shape-1.png"
import homeShape2 from "../images/home-shape-2.png"
import { motion } from "framer-motion"

const HomeLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, delay: 3 }}
      className='flex justify-center items-center gap-[20px] flex-col'>
      <img src={homeShape1} className="max-w-[full] sm:max-w-[200px] md:max-w-[300px]  max-h-[100px]" />
      <h1 className="font-pattaya text-[40px] sm:text-[35px] md:text-[45px] lg:text-[60px] text-[#1c1a40]">Marlen <span className="text-[#cd9b1b]">&</span> Kamila</h1>
      <p className='font-mont text-[20px] sm:text-[15px] md:text-[20px] text-[#1c1a40]'>14.12.2023</p>
      <img src={homeShape2} className="max-w-[full] sm:max-w-[200px] md:max-w-[300px] max-h-[100px]" />
    </motion.div>
  )
}

export default HomeLeft