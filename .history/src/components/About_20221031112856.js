import React from 'react';
import { aboutData } from '../data';
//import about data 
import {motion} from 'frammer-m'
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section>
    <div className='container mx-auto'>
    </div>
    </section>
  );
};

export default About;
