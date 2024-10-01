import React from 'react'
import HoverSwitch from './hover-switch'
function Ready() {
  return (
    <section className='realtive w-screen h-screen bg-[#0b182b]'>
        <div className='grid place-items-center '>
            <h1 className='sm:text-8xl font-bold font-nuni text-center mt-5 p-10'>Готови да започнем следващото приключение?</h1>
        <HoverSwitch/>
        </div>
    </section>
  )
}

export default Ready