import React from 'react'
import sliderImg1 from "../images/galery-6.jpg"
import { motion } from 'framer-motion'


const AboutRight = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1 }}
            id="gallery" className="relative w-full sm:py-[7%] h-full" data-carousel="slide">

            <div className="relative h-[300px] md:h-full overflow-hidden rounded-[5px]">

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={"https://singaporebrides.com/articles/wp-content/uploads/2017/07/Raevian-and-Evans-Breathtakingly-Exotic-Pre-Wedding-Shoot-in-Xinjiang-29.jpg"} className="absolute block max-w-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://www.lovemydress.net/wp-content/uploads/2019/11/Edinburgh-wedding-photographer-videographer-1024x683.jpg" className="absolute block max-w-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://st4.depositphotos.com/13194036/29979/i/450/depositphotos_299799490-stock-photo-handsome-smiling-bridegroom-putting-wedding.jpg" className="absolute block max-w-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?b=1&s=612x612&w=0&k=20&c=U5QcOqf91hMuvNLs-nO8VCxt0ThlaWw5sdzjSIBofls=" className="absolute block max-w-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://images.squarespace-cdn.com/content/v1/5ba2a38bb27e396d3d619fee/1537550440546-X5GRAXL3W2L1W4FSH0QT/Montreal-Wedding-Photographer-Randy-Smith+%281+of+1%29-2.jpg" className="absolute block max-w-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </motion.div>


    )
}

export default AboutRight