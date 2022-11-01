import React from 'react'
import hero from '../img/gallery/1.png'
const Analytics = () => {
  return (
    <div className='w-full items-center bg-black p-20'>
  <div className='mx-auto grid lg:grid-cols-2 md:grid-cols-3'>
  <img src={hero} className="w-[600px] sm:w-[600px]"/>
  <div className='font-tertiary flex flex-col justify-center md:py-5 sm:p-6 '>
  <p className='text-[#ecfff8] font-bold  sm:p-6'>DATA Tattos</p>
  <h1 className='text-[#ecfff8] md:text-2xl sm:text-xl text-lg font-bold py-2 sm:p-4'>Manage Data Gathering from People</h1>
  <p className='text-[#ecfff8]    text-leading md:text-3xl sm:text-xl font-bold md:p-10'>
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
