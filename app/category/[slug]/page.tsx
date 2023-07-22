import Navbar from '@/app/components/NavBar'
import React from 'react'
import SaleHero from './components/SaleHero'
import Products from './components/Products'
import Footer from '@/app/components/Footer'
import ScrollTopBtn from '@/app/components/assets/ScrollTopBtn'

function page({params}: {params: { slug: string }}) {
  return (
    <>
    <Navbar />
    <main className='sm:px-10'>
    <SaleHero category={params.slug} />
    <Products category={params.slug} />
    </main>
    <Footer/>
    <ScrollTopBtn/>

    </>
  )
}

export default page