import React from 'react'
import { GrIceCream } from 'react-icons/gr';
import support from '../img/interview/bg.png';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Support = () => {
  return (
    <div  name="support" className='w-full mt-[40px] ' >
      <div className='bg-black-200/25 w-full h-[700px] text-white  absolute'>
      <img src={support} className=" mix-blend-normal w-full h-full object-cover" />
      </div>
      <div className=' max-w-[1240px] h-full text-white mx-auto relative'>
      <div className='px-4 py-12'>
      <h2 className='text-3xl pt-8 text-black uppercase text-cente'>Support</h2>
      <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
      <p className='py-4 text-3xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us </p>
  </div>
  
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
      <div className='bg-white rounded-lg w-full '>
      <div className='p-8'>
      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
     <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
     <button className='bg-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
     </div>
      
      

      </div>
      <div className='bg-white rounded-lg w-full '>
      <div className='p-8'>
      <h3 className='font-bold text-2xl my-6'>Management</h3>
     <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
     <button className='bg-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
     </div>
      
      

      </div>
      <div className='bg-white rounded-lg w-full '>
      <div className='p-8'>
      <h3 className='font-bold text-2xl my-6'>Sales</h3>
     <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
     <button className='bg-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

     </div>
      
      

      </div>
  </div>

      </div>

     

      
    </div>
  )
}

export default Support
