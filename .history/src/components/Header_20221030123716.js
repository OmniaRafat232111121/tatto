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
    <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg bg-black text-white-400' : 'h-[120px] lg:h-[150px]'
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <a href='/'>
          <img className='w-[150-px] h-[90px]' src={logo} alt='' />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        </div>
    </header>
  );
};

export default Header