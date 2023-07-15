import React from 'react'

function loading() {
  return (
    <>
    <nav data-placeholder className='fixed top-0 left-0  w-full rounded-xl  p-3 z-50 bg-gray-300 h-[70px]'></nav>
    <div className='md:flex px-1 md:px-8 py-12 mt-24 gap-x-8 space-y-4 rounded'>
    <div className="w-full md:w-[45%]  h-[70vh] bg-slate-500/5 rounded-xl animate-pulse"></div>
    <div className="w-full md:w-[45%] h-[70vh] bg-slate-500/5 rounded-xl flex-col justify-center space-y-8 animate-pulse">
    <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
    <div className="w-full bg-gray-200 animate-pulse h-10 rounded-2xl"></div>
    <div className="w-full bg-gray-200 animate-pulse h-10 rounded-2xl"></div>
    <div className="w-full bg-gray-200 animate-pulse h-10 rounded-2xl"></div>
    <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
    <div className="w-full bg-gray-200 animate-pulse h-28 rounded-2xl"></div>
    </div>

    </div>
    </>
  )
}

export default loading