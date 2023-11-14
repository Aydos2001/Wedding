import React from 'react'
import HomeLeft from '../../components/home-left'
import HomeRight from '../../components/home-right'
import Container from '../../components/container'
import homeBg from "../../images/bg.png"
import aboutShape from '../../images/galery-shape-2.png'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1}}
            className={"bg-center overflow-hidden"} style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 1 }}
                src={aboutShape}
                className='max-h-[200px] max-w-[200px] md:max-h-[250px] lg:max-w-[300px] lg:max-h-[300px] md:max-w-[250px]  hidden sm:block absolute left-0 top-[10px]' />
            <Container>
                <div className='flex justify-between items-center gap-[20px] sm:gap-[5px] pt-[80px] sm:pt-[50px] flex-col sm:flex-row'>
                    <div className='flex-1 flex justify-center items-center'>
                        <HomeLeft />
                    </div>
                    <div className='flex-1'>
                        <HomeRight />
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

export default Home