import React from 'react';

const Contact = () => {
  //destructring Contact data 
  const {title,info,form}=contactData;
  return (
<section className='bg-pink-200 section'>
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
  <div>{title}</div>
  <div>{subtitle}</div>
  {/*address*/}
  <div>{address.icon}</div>
  <div>{address.name}</div>
   {/*phone*/}
   <div>
   <div>{ph</div>
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
