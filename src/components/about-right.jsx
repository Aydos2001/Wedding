import React, { useRef } from 'react'
import sliderImg1 from "../images/galery-6.jpg"
import { Carousel, IconButton } from "@material-tailwind/react";
import { motion, useInView } from 'framer-motion'


const AboutRight = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            initial={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1 }}
            ref={ref}
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
                    src={"https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"}
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
                <img
                    src={"https://cdn0.weddingwire.com/vendor/913853/3_2/1280/jpg/caitlin-evan-married-nathaniel-jensen-photography-omaha-nebraska-wedding-photographer-875_51_358319-163840544156074.jpeg"}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={"https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_960_720.jpg"}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </motion.div>

    )
}

export default AboutRight