import React from 'react'

const Flex = () => {
  return (
    <div className='container h-full bg-white py-[10rem] '>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <div className='flex flex-cols w-full rounded-lg hover:scale-100 duration-200'>
    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
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
