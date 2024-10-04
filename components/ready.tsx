import React from 'react'
import HoverSwitch from './hover-switch'
function Ready() {
  return (
    <section className='realtive w-screen h-[85vh] sm:h-[89vh] pb-[15%] bg-[#0b182b]'>
        <div className='grid place-items-center '>
            <h1 className='lg:text-5xl xl:text-8xl text-3xl text-white font-bold font-nuni text-center mt-5 p-10'>Готови за <br />следващото <br /> <span className='text-gray-500'>приключение?</span> </h1>
            <HoverSwitch/>
        </div>
    </section>
  )
}

export default Ready