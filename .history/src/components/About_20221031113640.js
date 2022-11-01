import React from 'react';
import { aboutData } from '../data';
// import variants
import { fadeIn } from '../variants';
//import about data 
import {motion} from 'framer-motion'
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className='lg:py-16 md:py-30'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-ro gap-x-[70px] items-center'>
    <motion.div 
    variants={fadeIn('left')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.8 }}
    className='flex '>
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
