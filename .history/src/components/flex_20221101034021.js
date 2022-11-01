import React from 'react'

const Flex = () => {
  return (
    <div className=' h-full bg-white py-[30rem] w-full'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <h2 className='text-2xl font-bold text-center py-8'>Single tatto</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Flex
