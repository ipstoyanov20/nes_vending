import React from 'react'
import HoverSwitch from './hover-switch'
function Ready() {
  return (
    <section className='realtive w-screen h-screen bg-black'>
        <div className='grid place-items-center '>
            <h1 className='text-9xl font-bold font-clash text-center mt-5 p-10'>Ready to build
the next?</h1>
        <HoverSwitch/>
        </div>
    </section>
  )
}

export default Ready