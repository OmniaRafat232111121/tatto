import React,{useState} from 'react';
import {galleryData} from '../data'
//motion 
import {motion} from 'framer-motion'
//variants 
import {fadeIn} from '../variants'
import PhotoAlbum from 'react-photo-album';
const GallerySection = () => {
  //destructring data 
  const {title,btnText,btnIcon,image}=galleryData;
  return (
    <section className='bg-[#F9F9F9]  section relative mt-[40px] lg:mt-0'>
    <div className='container mx-auto'>
    <motion.h2
    variants={fadeIn('down')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.6 }}
    className='h2 max-w-[300px] lg:mb-20'
  >
    {title}
  </motion.h2>

  {/*photo album*/}
  <div>

  <PhotoAlbum layout="rows" photos={photos} />
  </div>

    </div>

    </section>

  );
};

export default GallerySection;
