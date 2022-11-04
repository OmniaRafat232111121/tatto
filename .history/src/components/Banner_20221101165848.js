import React from 'react'
import ReactTyped from 'react-typed'

const Banner = () => {
  return (
    <motion.section
    variants={fadeIn('right')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.4 }}
    className='pb-[50px] pt-[60px] lg:pb-[160px] lg:pt-0 mt-[40px]'
  >
    <div className='text-white bg-black p-[50px]'>
    <div className='w-max-[800px] flex flex-col  w-full h-[400px] justify-center items-center'>
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
     
    </div>
    <button className='bg-white rounded-md py-5 text-black w-[300px] mt-[24px]'>Get Started</button>
 
    
    </div>
  
    </div>
    </motion.section>
  )
}

export default Banner
