import React from 'react'
import Container from '../../components/container'

const AboutParent = () => {
    return (
        <div className='mb-[40px]'>
            <Container>
                <div className='flex justify-center items-center flex-col'>
                    <div className='mt-[20px]'>
                        <h2 className='text-[20px] text-center sm:text-[25px] md:text-[25px] lg:text-[25px] font-spectral font-bold text-[#48491d]'>Toy iyeleri</h2>
                    </div>
                    <div>
                        <h2 className='text-[30px] text-center sm:text-[35px] md:text-[35px] lg:text-[35px] font-lobster text-[#c4a43b]'>
                            Jaras-Gu'lnur
                        </h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutParent