import { MotionConfig } from 'framer-motion';
import React,{useState} from 'react';
import { interviewData } from '../data';

const Interview = () => {
  //destructring Data
  const {title,btnText,btnIcon}=interviewData;
  const [isOpen,setOpen]=useState(0);
  return (
  <MotionConfig.section>
  );
};

export default Interview;
