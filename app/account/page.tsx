"use client"
import React from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile'
import ProtectRoute from './components/ProtectRoute'

function page() {
  return (
    <ProtectRoute >
        <Nav/>
        <Profile />
    </ProtectRoute>
  )
}

export default page