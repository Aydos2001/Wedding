import { Button, Radio } from '@material-tailwind/react'
import React, { useRef } from 'react'
import Container from '../../components/container'

import QuestionLeft from '../../components/question-left'
import QuestionTimeRight from '../../components/question-time-right'

const Question = () => {
    return (
        <div>
            <Container>
                <div className='flex justify-center mb-[20px] gap-3 flex-col'>
                    <div className='flex-[1] flex justify-center items-center'>
                        <QuestionLeft />
                    </div>
                    <div className='flex-[1.5] flex flex-col justify-center gap-2 items-center'>
                        <div className='mt-[20px]'>
                            <h2 className='text-[20px] text-center sm:text-[25px] md:text-[25px] lg:text-[25px] font-lobster text-[#48491d]'>Toyg'a qaldi</h2>
                        </div>
                        <QuestionTimeRight />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Question