import React from 'react';
import { aboutData } from '../data';
//import about data 
import {motion} from 'framer-motion'
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className='lg:py-16'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-ro gap-x-[70px] items-center'>
    <motion.div 
    variants={fadeIn('right')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7 }}
  className='flex flex-col lg:flex-row flex-1'>
            <div className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>
            01
          </div>
    
            </motion.div>

    </div>
    </div>
    </section>
  );
};

export default About;
