import React from 'react'

function loading({slug}:{slug : string}) {
    const products = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
    <nav data-placeholder className='fixed top-0 left-0  w-full rounded-xl  p-3 z-50 bg-gray-300 h-[70px]'></nav>
    <div data-placeholder className='mt-24 h-[50vh] w-[80vw] mx-auto block bg-gray-300 rounded-xl'></div>
    <div>
    <h3 className=' w-52 h-8 bg-gray-300 ms-4 my-3 animate-pulse rounded-xl'></h3>
    <div className='my-5 flex flex-row justify-center  gap-y-10 flex-wrap '>
      {products.map((product : number)=>{
        return(      
            <div className="w-1/2 md:w-2/6 lg:w-3/12 h-[250px]  px-3 md:px-8">
                <div className=' w-full h-full bg-gray-300 animate-pulse rounded-lg p-2'>
                <div className="w-full bg-gray-200 animate-pulse mx-auto h-[150px] rounded-2xl"></div>
                <div className="w-full bg-gray-200 animate-pulse my-3  h-3 rounded-2xl"></div>
                <div className="w-full bg-gray-200 animate-pulse my-3  h-3 rounded-2xl"></div>
                <div className="w-full bg-gray-200 animate-pulse my-3  h-3 rounded-2xl"></div>
                </div>
            </div>
        )
      })}
    </div>
  </div>
    </>
  )
}

export default loading