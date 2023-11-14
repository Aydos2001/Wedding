import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[90%] max-w-[1600px] mx-auto' >
        {children}
    </div>
  )
}

export default Container