import React from 'react'
import support from '../img/interview/bg.png';
import { GiDecapitation} from 'react-icons/gi';
import {GrStatusInfoSmall} from 'react-icons/gr';
import {AiOutlineArrowRight}

const Support = () => {
  return (
    <div  name="support" className='w-full mt-[40px] ' >
      <div className='bg-black-200/25 w-full h-[700px] absolute'>
      <img src={support} className=" mix-blend-normal w-full h-full object-cover" />
      </div>
      <div className=' max-w-[1240px] text-black mx-auto relative'>
      <div className='px-4 py-12'>
      <h2 className='text-3xl pt-8 text-black uppercase text-center'>Support</h2>
      <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
      <p className='py-4 text-3xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
  </div>
  <div className='grid grid-cols-3 relative w-full h-10 py-10' >
      <div className='bg-white shadow-lg text-2xl'>
      <div className='p-8'>
      <GiDecapitation className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      <div className='bg-slate-100 pl-8 py-4'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-7 ml-2' /></p>
  </div>
      </div>
      </div>
      <div className='bg-white shadow-lg text-2xl'>
      <div className='p-8'>
      <GrStatusInfoSmall className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      </div>
      </div>
      <div className='bg-white shadow-lg text-2xl'>
      <div className='p-8 flex  flex-col justify-center items-center'>
      <GiDecapitation className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      </div>
      </div>
  </div>

      </div>

     

      
    </div>
  )
}

export default Support
