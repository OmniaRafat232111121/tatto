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
    window.screenY >50 ?
  })
})
  return (
    <header>
     
    </header>
  );
};

export default Header