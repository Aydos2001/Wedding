import React from 'react'
import Container from '../../components/container'

const Header = () => {
    return (
        <div className='min-h-[70px] absolute top-0 left-0 w-full flex justify-between items-center'>
            <Container>
                <div className="font-lobster text-[25px] sm:text-[30px] text-slate-700">
                    My<span className='text-red-600'>Love</span>
                </div>
            </Container>
        </div>
    )
}

export default Header