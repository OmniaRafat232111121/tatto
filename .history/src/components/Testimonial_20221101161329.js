import React from 'react';
import {motion} from 'framer-motion';
//fadin 
import {fadeIn} from '../variants' 

const Testimonial = () => {
  return (
<motion.section
variants={fadeIn('up')}
initial=''
 className='bg-black p-[40px] mt-[20px]'>

</motion.section>
  );
};

export default Testimonial;
