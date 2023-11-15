import React from 'react'
import sliderImg1 from "../images/galery-6.jpg"
import { Carousel, IconButton } from "@material-tailwind/react";
import { motion } from 'framer-motion'


const AboutRight = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1 }}
            className='sm:h-[84%] sm:my-[8%]'>
            <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={4000}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
                transition={{ duration: 1 }}
                className="rounded-md">
                <img
                    src={"https://media.istockphoto.com/id/1334542509/photo/elopement-wedding.jpg?s=612x612&w=0&k=20&c=NMhdtBEyfTXtRH_XxYAh5kphkeewjl2rVDGQuLIfwTs="}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={"https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais"}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={"https://st3.depositphotos.com/1063633/37673/i/450/depositphotos_376734878-stock-photo-groom-leads-bride-hand-sunset.jpg"}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </motion.div>

    )
}

export default AboutRight