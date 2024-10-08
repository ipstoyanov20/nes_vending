import React from 'react'
import HoverSwitch from './hover-switch'
function Ready() {
  return (
    <section id='ready' className='realtive w-screen h-auto pb-20 bg-[#0b182b]'>
        <div className='grid place-items-center '>
            <h1 className='lg:text-5xl xl:max-2xl:text-5xl 2xl:text-8xl text-3xl text-white font-bold font-nuni text-center mb-10 p-10'>Готови за <br />следващото <br /> <span className='text-gray-500'>приключение?</span> </h1>
            <HoverSwitch/>
        </div>
    </section>
  )
}

export default Ready