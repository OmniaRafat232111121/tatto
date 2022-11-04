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
    <section className='section bg-dark'>
    <div className='container mx-auto'>
    {/*grid*/}
    <div className='text-white'>
    {/*about/}
    <di
    </div>
    </div>
  </section>

  );

};

export default Footer;
