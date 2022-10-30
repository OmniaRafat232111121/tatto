import React from 'react'
import {heroData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
const container={
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
}
const Hero = () => {
  //destructring
  const {title,subtitle,btnText,btnIcon}=heroData;
  return (
   <section className='bg-hero bg-cover min-h-[40vh] lg:h-[984px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
   <motion.div var>
   </motion.div>
   </section>
  )
}

export default Hero
