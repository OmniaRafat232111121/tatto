import React from 'react';
import Socials from './Socials';
import { navData } from '../data';
const NavMobile = () => {
  const {items}=navData
  return (
    <nav className='w-full flex flex-col justify-between'>
    <ul className='flex flex-col justify-center items-center'>
   {items.map((item,index)=>{
    return(
      <li key={index}>
      <a className='text-2xl font-primary uppercase' href={item.href}>
        {item.name}
      </a>
    </li>
    )
   })
   }
    </ul>
    <div className='text-2xl'>
    <Socials/>
    </div>
    </nav>

  );
};

export default NavMobile;
