import React from 'react';
 import {navData} from '../data'
const Nav = () => {
  const {items}=navData;
  return (
<nav>
<ul className='flex j gap-x-[30px]'>
{items.map((item,index)=>{
  return(
    <li key={index}>
    <a className='link hover-b-2 hover:border-dark transtion duration-500'>
    {item.name}
    </a>
    </li>
  )
})}
</ul>
</nav>
  );
};

export default Nav;
