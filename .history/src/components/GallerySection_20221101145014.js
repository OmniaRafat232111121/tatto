import React,{useState} from 'react';
import {galleryData} from '../data'
//motion 
import {motion} from 'framer-motion'
//variants 
import {fadeIn} from '../variants'
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox/*';
const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}))
const GallerySection = () => {
  const [index,setIndex]=useState(-1);
  //destructring data 
  const {title,btnText,btnIcon,images}=galleryData;
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
  <motion.div
  variants={fadeIn('down')}
  initial='hidden'
  whileInView={'show'}
  viewport={{ amount: 0.6 }}
  className="mb-8 lg:mb-20"
  >
  <PhotoAlbum
  onClick={(event,photo,index)=>setIndex(index)}
  layout='rows'
  photo={images}
  />
  <Lightbox
  slides={slides}
  styles={{container:{back}}}
  />
  
  </motion.div>

    </div>

    </section>

  );
};

export default GallerySection;
