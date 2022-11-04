import React from 'react';
import { contactData } from '../data';
const Contact = () => {
  //destructring Contact data 
  const {title,info,form}=contactData;
  return (
<section className='section'>
<div className='container mx-auto'>
<div>
{/*text*/}
<div>
{/*title*/}
<h2>{title}</h2>
{/*info items*/}
<div>
{info.map((item,index)=>{
  //destructre item 
  // destructure item
  const { title, subtitle, address, phone, email, link } = item;
  return <div key={index}>
  {/*title*/}
  <div className='font-primary uppercase bg-pink-200 font-medium tet-xl mb-3'>{title}</div>
  <div>{subtitle}</div>
  {/*address*/}
  <div>
  </div>
   {/*phone*/}
   <div>
   <div>{phone.icon}</div>
   <div>{phone.number}</div>
   </div>
   {/*email*/}
   <div>
   <div>{email.icon}</div>
   <div>{email.address}</div>
   </div>
  </div>
})}
</div>
</div>
</div>
</div>
</section>
  );

};

export default Contact;
