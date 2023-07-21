import Navbar from '@/app/components/NavBar'
import React from 'react'
import MainPage from './components/MainPage'
import Footer from '@/app/components/Footer'


function page({params} : {params : {slug : string}}) {
  return (
    <>
       <Navbar />
       <MainPage productId={params.slug} />
       <Footer/>
    </>
  )
}

export default page