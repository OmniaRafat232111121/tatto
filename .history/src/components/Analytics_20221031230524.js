import React from 'react'
import hero from '../img/gallery/1.png'
const Analytics = () => {
  return (
    <div className='w-full items-center bg-black p-20'>
  <div className='mx-auto grid lg:grid-cols-2 md:grid-cols-3'>
  <img src={hero} className="w-[500px]"/>
  <div className='flex itms'>
  <h1>Content</h1>
  </div>
  </div>
    </div>
  )
}

export default Analytics
