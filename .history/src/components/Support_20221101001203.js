import React from 'react'
import support from '../img/interview/bg.png'
const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
    <div className='w-full h-[700px] bg-gray-900/90 absolute'>
      <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
    </div>
    
    <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
            <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
        </div>
        </div>
    </div>
  )
}

export default Support
