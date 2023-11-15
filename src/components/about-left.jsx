import { IoIosArrowForward } from "react-icons/io"; 
import { MdLocationOn } from "react-icons/md"; 
import React from 'react'
import oneFlower from "../images/one-flawer.png"
import aboutShape1 from "../images/about-shape1-w.png"
import aboutShape2 from "../images/about-shape2-w.png"
import { motion } from 'framer-motion'
import { DialogDefault } from './open-dialog'
import { Button } from '@material-tailwind/react'


const AboutLeft = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
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
                    className='flex justify-center  items-center flex-col px-[15px] lg:px-[20px] my-[10%] py-[20%] shadow-lg'>
                    <h2 className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155]'>
                        Hu'rmetli miymanlar
                    </h2>
                    <h3 className='text-[16px] mt-2 sm:text-[20px] md:text-[15px] lg:text-[20px] font-spectral text-[#3a315d] font-bold uppercase text-center'>
                        Sizlerdi ulimiz Marlen ha'm kelinimiz Kamilanin' u'yleniw toyina mirat etemiz
                    </h3>
                    <img className='max-w-[150px] max-h-[150px]' src={oneFlower} alt="" />
                    <p className='text-[16px] md:text-[15px] lg:text-[20px] font-spectral font-bold text-[#3a315d]'>Toy ku'ni</p>
                    <p className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155]'>16-mart 2023-jil</p>
                    <h2 className='text-[16px] mt-6 md:text-[15px] lg:text-[20px] font-spectral font-bold text-[#3a315d]'>
                        Ma'ka'n Jayimiz
                    </h2>
                    <div onClick={handleOpen}>
                        <p className='text-[18px] sm:text-[20px] md:text-[15px] lg:text-[20px] font-lobster text-[#256155] text-center'>Nokis qalasi Sultan Saray toyxanasi</p>
                        <div className='flex justify-center items-center text-indigo-900 cursor-pointer hover:underline transition duration-75'>
                            <MdLocationOn />
                            <p className='text-center font-mont font-semibold'>kartadan ko'riw</p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </motion.div>
                <img src={aboutShape2} className='absolute bottom-0' alt="" />
                <DialogDefault open={open} handleOpen={handleOpen} />
            </div>
        </motion.div>
    )
}

export default AboutLeft