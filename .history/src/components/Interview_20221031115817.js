import React,{useState} from 'react';
import { interviewData } from '../data';
//import motion 
import {motion} from 'framer-motion';
//import varient 
import {fadeIn} from '../variants'
const Interview = () => {
  //destructring Data
  const {title,btnText,btnIcon}=interviewData;
  const [isOpen,setOpen]=useState(0);
  return (
  <motion.section
  variants={fadeIn('up')}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.1 }}
  className='sec'
  >

  </motion.section>
  );
};

export default Interview;
