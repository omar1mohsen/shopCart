import React from 'react'
import CategoryCard from './CategoryCard'
import { Category } from '@mui/icons-material'
import FetchData from '@/app/utilts/helpers/FetchData'


interface category {
    id : number,
    title : string
}



async function  Categories() {
    const categories = await FetchData(`${process.env.NEXT_PUBLIC_CATEGORIES_URL}`)

  return (
    <main className='py-7 px-4'>
        <h3 className='text-[var(--main-color)] font-bold text-lg md:text-2xl my-3'>Shop Our Top Categories</h3>
        <div className="flex flex-col justify-center items-center space-y-4  sm:flex-row sm:space-x-4 sm:space-y-0">
        <CategoryCard category='All'  />
        {categories.map((category : any )=>{
           return <CategoryCard key={category.id} category={category}  />
        })}
        </div>
    </main>
  )
}

export default Categories