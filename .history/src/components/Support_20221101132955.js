import React from 'react'
import support from '../img/interview/bg.png';
import { GiDecapitation} from 'react-icons/gi';
import {GrStatusInfoSmall} from 'react-icons/gr';
import {AiOutlineArrowRight} from 'react-icons/ai'

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
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-10 ml-2' /></p>
  </div>
  
      </div>
  <div className='grid  grid-cols-1 lg:grid-cols-3 relative w-full  py-10 h-40 sm:px-10 sm:py-20' >
      <div className='bg-white shadow-lg text-2xl hover:scale-110 duration-200 sm:p-10'>
      <div className='p-8 flex  flex-col justify-center items-center'>
      <GiDecapitation className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-10 ml-2' /></p>
  </div>
      </div>
      </div>
      <div className='bg-white shadow-lg text-2xl hover:scale-110 duration-200'>
      <div className='p-8 flex  flex-col justify-center items-center'>
      <GrStatusInfoSmall className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-10 ml-2' /></p>
  </div>
      </div>
      </div>
      <div className='bg-white shadow-lg text-2xl hover:scale-110 duration-200'>
      <div className='p-8 flex  flex-col justify-center items-center'>
      <GiDecapitation className='font-bold text-2xl my-6'/>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-10 ml-2' /></p>
  </div>
      </div>
      </div>
  </div>

      </div>

     

      
    </div>
  )
}

export default Support
