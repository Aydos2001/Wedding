import React from 'react'
import frameDate from "../images/frame-date.png"

const QuestionTimeRight = () => {
  return (
    <div className='w-full bg-[#917927] p-[10px]'>
        <div className='flex  justify-around items-center border-[1px] relative p-[10px] text-white'>
            <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute top-0 left-0' alt="" />
            <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute top-0 right-0 rotate-90' alt="" />
            <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute bottom-0 left-0 -rotate-90' alt="" />
            <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute bottom-0 right-0 rotate-180' alt="" />
            <div className='flex justify-center items-center sm:gap-1 flex-col w-full'>
                <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>13</h3>
                <p className='font text-[12px] sm:text-[15px] text-mont'>ku'n</p>
            </div>
            <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
                <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>02</h3>
                <p className='font text-[12px] sm:text-[15px] text-mont'>saat</p>
            </div>
            <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
                <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>14</h3>
                <p className='font text-[12px] sm:text-[15px] text-mont'>minut</p>
            </div>
            <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
                <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>35</h3>
                <p className='font text-[12px] sm:text-[15px] text-mont'>sekund</p>
            </div>
        </div>
    </div>
  )
}

export default QuestionTimeRight