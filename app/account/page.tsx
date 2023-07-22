"use client"
import React from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile'
import ProtectRoute from './components/ProtectRoute'
import Footer from '../components/Footer'
import ScrollTopBtn from '../components/assets/ScrollTopBtn'

function page() {
  return (
    <ProtectRoute >
        <Nav/>
        <Profile />
        <Footer/>
        <ScrollTopBtn/>
    </ProtectRoute>
  )
}

export default page