import React from 'react'
import oneFlower from "../images/one-flawer.png"
import aboutShape1 from "../images/about-shape1-w.png"
import aboutShape2 from "../images/about-shape2-w.png"
import { motion } from 'framer-motion'


const AboutLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1 }}
            className='flex justify-center items-center flex-col'>
            <div className='flex justify-center min-h-full min-w-full  items-center relative gap-3 flex-col max-w-[500px]'>
                <img src={aboutShape1} className='absolute top-0' alt="" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='flex justify-center  items-center gap-3 flex-col px-[15px] lg:px-[20px] my-[10%] py-[20%] shadow-lg'>
                    <h2 className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155]'>
                        Hu'rmetli miymanlar
                    </h2>
                    <h3 className='text-[16px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-mont text-[#3a315d] font-bold uppercase text-center'>
                        Sizlerdi ulimiz Marlen ha'm kelinimiz Kamilanin' u'yleniw toyina mirat etemiz
                    </h3>
                    <img className='max-w-[150px] max-h-[150px]' src={oneFlower} alt="" />
                    <p className='text-[16px] md:text-[15px] lg:text-[20px] font-mont font-bold text-[#3a315d]'>Toy ku'ni</p>
                    <p className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155]'>16-mart 2023-jil</p>
                    <h2 className='text-[16px] md:text-[15px] lg:text-[20px] font-mont font-bold text-[#3a315d]'>
                        Ma'ka'n Jayimiz
                    </h2>
                    <div>
                        <p className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155] text-center'>Nokis qalasi Sultan Saray toyxanasi</p>
                    </div>
                </motion.div>
                <img src={aboutShape2} className='absolute bottom-0' alt="" />
            </div>
        </motion.div>
    )
}

export default AboutLeft