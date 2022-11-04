import React from 'react';
// import footer data
import { footerData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
const Footer = () => {
 const{about,links,program,newsletter} =footerData
  return (
    <fo className='section bg-dark'>
    <div className='container mx-auto'>
    {/*grid*/}
    <div className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-[20px] gap-y-9'>
   <motion.div>about</motion.div>
   <div>title</div>
   <div>subtitle</div>
   <div>address</div>
   <div>Phone</div>
   <div>email</div>
   
    </div>
    </div>
  </f>

  );

};

export default Footer;