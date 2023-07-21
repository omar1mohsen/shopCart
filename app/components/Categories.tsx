import React from 'react'
import CategoryCard from './CategoryCard'
import FetchData from '@/app/utilts/helpers/FetchData'


interface category {
    id : number,
    title : string
}



async function  Categories() {
    const categories = await FetchData(`${process.env.NEXT_PUBLIC_CATEGORIES_URL}`)

  return (
    <div className='py-7 md:py-16  px-4' id='categories'>
        <h3 className='text-[var(--main-color)] font-bold text-lg md:text-2xl'>Shop Our Top Categories</h3>
        <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 sm:px-10 md:px-20 sm:py-3">
        <CategoryCard category='All'  />
        {categories.map((category : any )=>{
           return <CategoryCard key={category.id} category={category}  />
        })}
        </div>
    </div>
  )
}

export default Categories