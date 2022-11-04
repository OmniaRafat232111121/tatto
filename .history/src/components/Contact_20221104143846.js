import React from 'react';
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
const Contact = () => {
  //destructring Contact data 
  const {title,info,form}=contactData;
  return (
<section className='section'>
<div className='container mx-auto'>
<div className='flex flex-col xl:flex-row  gap-y-16'>
{/*text*/}
<motion.div
variants={fadeIn('right')}
initial='hidden'
whileInView={'show'}
viewport={{ once: false, amount: 0.4 }}
className='flex-1'>
{/*title*/}
<h2 className='h2 max-w-[490px]' >{title}</h2>
{/*info items*/}
<div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
{info.map((item,index)=>{
  //destructre item 
  // destructure item
  const { title, subtitle, address, phone, email, link } = item;
  return <div key={index}>
  {/*title*/}
  <div className='font-primary uppercase bg-pink-200 font-medium tet-xl mb-3'>{title}</div>
  <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{subtitle}</div>
 <div className='flex flex-col gap-y-3 mb-8'>
  {/*address*/}
  <div className='flex items-center gap-[10px]'>
  <div>{address.icon}</div>
  <div className='font-medium'>{address.name}</div>
  </div>
   {/*phone*/}
   <div className='flex items-center gap-[10px]'>
   <div>{phone.icon}</div>
   <div className='font-medium'>{phone.number}</div>
   </div>
   {/*email*/}
   <div className='flex items-center gap-[10px]'>
   <div>{email.icon}</div>
   <div className='font-medium'>{email.address}</div>
   </div>
   {/*link*/}
   <a className='font-medium border-b border-dark pb-[5px]' href="#">{link}</a>
 </div>
  </div>
})}
</div>
{/*form*/}
<motion.div
variants={fadeIn('left')}
initial='hidden'
wh
>

</motion.div>

</motion.div>
</div>
</div>
</section>
  );

};

export default Contact;
