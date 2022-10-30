import React from 'react'
import {heroData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
const Hero = () => {
  //destructring
  const {title,subtitle,btnText,btnIcon}=heroData;
  return (
   <section className='bg-hero bg-cover bg-no-repeat'>

   </section>
  )
}

export default Hero
