import React from 'react'
import Container from '../../components/container'
import AboutRight from '../../components/about-right'
import AboutLeft from '../../components/about-left'


const About = () => {
  return (
    <div className='min-h-[600px] relative'>
      <Container>
        <div className='flex my-[20px] flex-col md:flex-row gap-2'>
          <div className='sm:flex-[1]'>
            <AboutLeft/>
          </div>
          <div className='sm:flex-[1.5] justify-center items-center'>
            <AboutRight/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About