import React from 'react'

function loading() {
    const categories = [1,2,3,4,5]
  return (
    <>
    <nav data-placeholder className='fixed top-0 left-0  w-full rounded-xl  p-3 z-50 bg-gray-300 h-[70px]'></nav>
    <main data-placeholder className="h-[55vh] w-100 mt-20 rounded-xl  bg-gray-300"></main>
    <main className='py-7 px-4'>
        <h3 className=' w-52 h-8 bg-gray-300  my-3 animate-pulse rounded-xl'></h3>
        <div className="flex flex-row space-x-4">
        {categories.map((category : any )=>{
           return (
            <>
            <div className='w-1/5 h-[250px] rounded-lg animate-pulse  bg-gray-300'></div>
            </>
           ) 
        })}
        </div>
    </main>
    </>
  )
}

export default loading