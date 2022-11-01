import React from 'react';
import {motion} from 'framer-motion';
//fadin 
import {fadeIn} from '../variants' 

const Testimonial = () => {
  return (
<motion.section
variants={fadeIn('up')}
initial='hidden'
whileInView={'show'}
viewport={{once:false,amount:0.3}}
className='bg-black  pt-[40px] pb-[40px] lg:pb-[1mt-[20px]'>

</motion.section>
  );
};

export default Testimonial;
