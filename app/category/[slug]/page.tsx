import Navbar from '@/app/components/NavBar'
import React from 'react'
import SaleHero from './components/SaleHero'
import Products from './components/Products'

function page({params}: {params: { slug: string }}) {
  return (
    <>
    <Navbar />
    <main className='px-10'>
    <SaleHero category={params.slug} />
    <Products category={params.slug} />
    </main>
    </>
  )
}

export default page