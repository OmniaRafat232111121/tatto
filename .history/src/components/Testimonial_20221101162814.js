import React from 'react';
import {motion} from 'framer-motion';
//fadin 
import {fadeIn} from '../variants' 
import { testimonialData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
<motion.section
variants={fadeIn('up')}
initial='hidden'
whileInView={'show'}
viewport={{once:false,amount:0.3}}
className='bg-black  pt-[40px] pb-[40px] lg:pb-[160px] lg:pt-0 mt-[20px]'>
<div className='container mx-auto'>
<Swiper>
{testimonialData.map((slide,index)=>{
  const { quoteImg, message, name, occupation } = slide;
  return(
    <SwiperSlide key={index}>
     <div className='max-w-[1200px] mx-auto flex'>
     </div>
    </SwiperSlide>
  );
})}
</Swiper>
</div>
</motion.section>
);
};

export default Testimonial;
