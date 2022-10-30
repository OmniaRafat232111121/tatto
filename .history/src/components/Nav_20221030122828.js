import React from 'react';
 import {navData} from '../data'
const Nav = () => {
  const {items}=navData;
  return (
<nav>
<ul className='flex'>
{items.map((item,inde))}
</ul>
</nav>
  );
};

export default Nav;
