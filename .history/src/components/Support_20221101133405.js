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
      <div className=' max-w-[1240px] h-full text-black mx-auto relative'>
      <div className='px-4 py-12'>
      <h2 className='text-3xl pt-8 text-black uppercase text-center'>Support</h2>
      <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
      <p className='py-4 text-3xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
      <div className='bg-black w-[250px] text-white pl-8 py-4 mt-[20px]'>
      <p className='flex items-center text-black-600'>Contact Us <AiOutlineArrowRight className='w-10 ml-2' /></p>
  </div>
  
      </div>


      </div>

     

      
    </div>
  )
}

export default Support
