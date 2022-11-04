import React,{useState} from 'react';
import { interviewData } from '../data';
import '../';
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
className='text-white text-[40px] lg:text-[60px] leading-[1.2] mb-7'
>
{title}
</motion.h3> 
{/*btn*/}
<motion.div variants={fadeIn('down')}> 
<div className='font-primary uppercase tracking-[0.1em]'>
{btnText}
</div>
</motion.div>


<ModalVideo
channel='youtube'
autoplay
isOpen={isOpen}
videoId='_l1mqYQuNf8'
onClose={() => setOpen(false)}
/>
</div>
  </div>
  </div>
  

  </motion.section>
  );
};

export default Interview;
