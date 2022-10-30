import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
const {logo}=headerData;
const [isActive,setIsActive]=useState(false);
const [navMobile,setNavMobile]=useState(false);
//scrollevent 
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY >50 ?setIsActive(true):setIsActive(false)
  })
})
  return (
    <header className='bg-green fixed left-0 right- z-10 w-full max-auto transition-all duration-300'>
      <div className='flex justify-between items-center h-full '>
      <a href='/'>
          <img className='w-[188px] h-[90px]' src={logo} alt='' />
        </a>
      </div>
    </header>
  );
};

export default Header