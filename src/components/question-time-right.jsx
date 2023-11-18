import React, { useState, useEffect } from 'react';
import frameDate from "../images/frame-date.png";

const QuestionTimeRight = () => {
  const [targetDate, setTargetDate] = useState(new Date('2023-12-14T00:00:00')); // O'zgartirish mumkin

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div className='w-full bg-[#917927] p-[10px]'>
      <div className='flex  justify-around items-center border-[1px] relative p-[10px] text-white'>
        <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute top-0 left-0' alt='' />
        <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute top-0 right-0 rotate-90' alt='' />
        <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute bottom-0 left-0 -rotate-90' alt='' />
        <img src={frameDate} className='max-w-[30px] md:max-w-[40px] absolute bottom-0 right-0 rotate-180' alt='' />
        <div className='flex justify-center items-center sm:gap-1 flex-col w-full'>
          <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>{timeLeft.days}</h3>
          <p className='font text-[12px] sm:text-[15px] text-mont'>kun</p>
        </div>
        <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
          <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>{timeLeft.hours}</h3>
          <p className='font text-[12px] sm:text-[15px] text-mont'>soat</p>
        </div>
        <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
          <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>{timeLeft.minutes}</h3>
          <p className='font text-[12px] sm:text-[15px] text-mont'>minut</p>
        </div>
        <div className='flex justify-center items-center sm:gap-1 flex-col border-l-[1px] w-full'>
          <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-mont sm:font-bold'>{timeLeft.seconds}</h3>
          <p className='font text-[12px] sm:text-[15px] text-mont'>sekund</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionTimeRight;
