import React from 'react'
import homeImg from "../images/home.png"
import { motion } from 'framer-motion'

const HomeRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: 3 }}
      className='flex justify-end' >
      <div className="pt-[40px] pr-[40px] relative">
        <div className=' border-t-[2px] border-r-[2px] border-l-[2px] p-[10px] pb-0 border-[#b0b109] absolute top-0 right-0 bottom-0 w-[90%] rounded-t-full'>
          <div className='w-full h-full border-t-[2px] border-r-[2px] border-l-[2px] rounded-t-full border-[#b0b109]'></div>
        </div>
        <img src={homeImg} className="max-h-[700px]" />
      </div>
    </motion.div>
  )
}

export default HomeRight