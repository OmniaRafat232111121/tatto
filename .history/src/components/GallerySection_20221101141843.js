import React,{useState} from 'react';
import {galleryData} from '../data'
//motion 
import {motion} from 'framer-motion'
//va
const GallerySection = () => {
  //destructring data 
  const {title,btnText,btnIcon,image}=galleryData;
  return (
    <section className='bg-[#F9F9F9]  section relative mt-[40px] lg:mt-0'>
    <div className='container mx-auto'>
    <motion.h2
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.6 }}
    className='h2 max-w-[370px] lg:mb-20'
  >
    {title}
  </motion.h2
    </div>

    </section>

  );
};

export default GallerySection;
