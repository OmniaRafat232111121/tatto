import React from 'react';
// import data
import { heroData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};
const Hero = () => {
  //destructring
  const {title,subtitle,btnText,btnIcon}=heroData;
  return (
   <section className='bg-hero bg-cover min-h-[40vh] lg:h-[984px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
   <motion.div variants={container}
   initial='hidden'
   whileInView={'show'}
   className='container mx-auto min-h-[40vh]min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'
   >
   {/*text&btn*/}
   <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
   <motion.h1 
   variants={fadeIn('up')}
   className='h1'>
     {title}
   </motion.h1>
   <motion.p
   variants={fadeIn('down')}
   className='mb-8 lg:mb-16 max-w-lg leading-relaxed sm:p-3'
 >
   {subtitle}
 </motion.p>
 {/*btn*/}
 <motion.div 
 variants={fadeIn('down')}
 >
 <button className='btn btn-sm lg:btn-lg  sm:btn-sm btn-out max-auto lg:mx-0 sm:p-4 text-center'>
 {btnText}
 <div className='text-xl'>{btnIcon}</div>
 </button>
 </motion.div>
   </div>
   </motion.div>
       {/* outline text */}
   </section>
  )
}

export default Hero
