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
    <header className={`
    ${isActive ? 'h-[100px] lg:h-[110px] shadow-lg':'h-[120px] lg:h-[150px]'}
    'bg-green fixed left-0 right- z-10 w-full max-auto transition-all duration-300'
    `}>
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
      <a href='/'>
          <img className='w-[188px] h-[90px]' src={logo} alt='logo' />
        </a>
      </div>
      {/* nav - initially is hidden - show on desktop*/}
      <div className='hidden :flex'>
      <Nav />
    </div>
    </header>
  );
};

export default Header