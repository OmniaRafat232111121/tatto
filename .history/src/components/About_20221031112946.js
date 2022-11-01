import React from 'react';
import { aboutData } from '../data';
//import about data 
import {motion} from 'frammer-motion'
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className='lg:py-16'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg'>
    </div>
    </div>
    </section>
  );
};

export default About;
