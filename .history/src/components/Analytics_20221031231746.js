import React from 'react'
import hero from '../img/gallery/1.png'
const Analytics = () => {
  return (
    <div className='w-full items-center bg-black p-20'>
  <div className='mx-auto grid lg:grid-cols-2 md:grid-cols-3'>
  <img src={hero} className="w-[500px]"/>
  <div className='font-tertiary flex flex-col justify-center md:p-5'>
  <p className='text-[#ecfff8] font-bold  sm:py-4'>DATA </p>
  <h1 className='text-[#ecfff8] md:text-2xl sm:text-xl text-lg font-bold py-2 sm:py-4'>Manage Data Analytics Centrally</h1>
  <p className='text-[#ecfff8]    text-leading md:text-3xl sm:text-2xl text-xl font-bold md:p-10'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
    molestiae delectus culpa hic assumenda, voluptate reprehenderit
    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
    eveniet ex deserunt fuga?
  </p>
 
  </div>
  </div>
    </div>
  )
}

export default Analytics
