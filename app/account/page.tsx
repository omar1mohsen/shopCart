"use client"
import React from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile'
import ProtectRoute from './components/ProtectRoute'
import Footer from '../components/Footer'

function page() {
  return (
    <ProtectRoute >
        <Nav/>
        <Profile />
        <Footer/>
    </ProtectRoute>
  )
}

export default page