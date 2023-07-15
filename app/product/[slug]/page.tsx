import Navbar from '@/app/components/NavBar'
import React from 'react'
import MainPage from './components/MainPage'

function page({params} : {params : {slug : string}}) {
  return (
    <>
       <Navbar />
       <MainPage productId={params.slug} />
    </>
  )
}

export default page