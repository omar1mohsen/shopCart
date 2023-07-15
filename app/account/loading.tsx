import React from 'react'

function loading() {
  return (
    <>
        <div className='w-full mx-auto md:mx-0 md:w-1/5 h-[150px] rounded-lg animate-pulse  bg-gray-300'></div>
        <div className='w-full md:w-4/5 px-6 border-t-2 md:border-t-0  md:border-s-2 border-black/20'>
        <h3 className=' w-52 h-8 bg-gray-300  py-5 animate-pulse rounded-xl'></h3>
        <h3 className=' w-52 h-8 bg-gray-300  py-5 animate-pulse rounded-xl'></h3>
        </div>
    </>
  )
}

export default loading