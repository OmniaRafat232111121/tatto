import React,{useState} from 'react';
import { interviewData } from '../data';
//import motion 
import {motion} from 'framer-motion';
//import varient 
import {fadeIn} from '../variants'
const Interview = () => {
  //destructring Data
  const {title,btnText,btnIcon}=interviewData;
  const [isOpen,setOpen]=useState(0);
  return (
  <motion.section
  variants={fadeIn('up')}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.1 }}
  className='section bg-dark bg-interiew bg-no-repeat bg-cover bg-center  lg:h-[812px] '
  >
  <div className='container mx-auto h-full'>
  <div className='flex flex-col justify-center'>
<div className='flex flex-col items-start max-w-[880px]'>
<motion.h3 
variants={fadeIn('right')}
className='text-white text-[40px] lg:text-[60px] leading-[1.1]'
>
{title}
</motion.h3>
</div>
  </div>
  </div>
  

  </motion.section>
  );
};

export default Interview;
