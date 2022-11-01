import React from 'react'
import ReactTyped from 'react-typed'
const Banner = () => {
  return (
    <div className='text-white bg-black p-[50px]'>
    <div className='w-max-[800px] flex flex-col  w-full h-screen justify-center items-center'>
    <p className='text-white font-bold p-2'>
    Growing with markting Tatoo
<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    Grow with Gathering
  </h1>
    </p> 
    <div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible effiency for
          </p>
    <ReactTyped  
    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
      strings={['Fast', 'Perfect', 'performance']}
      typeSpeed={120}
      backSpeed={140}
      loop
    />
     <butt
    </div>
 
    
    </div>
  
    </div>
  )
}

export default Banner
