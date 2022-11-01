import React from 'react'

const Flex = () => {
  return (
    <div className=' h-full bg-black text-white border-white py-[30rem] w-full px-[30px] mt-[40px]'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 bg-white text-black'>
    <div className='w-full  h-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <h2 className='text-2xl font-bold text-center py-8'>Single tatto</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#020303] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <h2 className='text-2xl font-bold text-center py-8'>Two tatto</h2>
              <p className='text-center text-4xl font-bold'>$249</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#020303]  text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <h2 className='text-2xl font-bold text-center py-8'>Three tatto</h2>
              <p className='text-center text-4xl font-bold'>349</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 Granted User</p>
              <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#020303]  text-whitw-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
    </div>
    </div>
    </div>
  )
}

export default Flex
