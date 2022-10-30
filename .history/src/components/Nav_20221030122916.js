import React from 'react';
 import {navData} from '../data'
const Nav = () => {
  const {items}=navData;
  return (
<nav>
<ul className='flex'>
{items.map((item,index)=>{
  return(
    <li key={index}>
    <a >
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
