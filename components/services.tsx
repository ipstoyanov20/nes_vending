import React from 'react'

function ServicesSection() {
  return (
    <section className='w-screen h-screen bg-black'>
        <h1 className='text-5xl text-center m-7 p-5 text-white'>Нашите услуги</h1>
    <div className=' flex flex-col gap-y-10 items-center justify-center '>
        <div className="grid grid-cols-2">
            <h2>Helloo</h2>
            <article className='flex flex-col gap-10'>
                  <p>qweo'erjf;2roijeorqer[fjqrefpe[iqweqwfqwrr3433qfqfqwrqwrqwrqwejr</p>
                  <button>CLcikk</button>
            </article>
        </div>
        <div className="grid grid-cols-2">
            <h2>Hello</h2>
            <article className='flex flex-col gap-10'>
                  <p>qkpoq1hn[[popo13[lkqsmdlqk;lj1e[wfm'1len'1ijpw</p>
                  <button>Click</button>
            </article>
        </div>
    </div>
      </section>
  )
}

export default ServicesSection