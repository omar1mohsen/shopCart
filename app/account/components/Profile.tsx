"use client"
import { UserAuth } from '@/app/context/AuthContext'
import React from 'react'
import ProfileImage from './ProfileImage'
import ProfileData from './ProfileData'

function Profile() {
const {user , logOut} = UserAuth()
  return (
    <div className='flex flex-wrap md:flex-nowrap px-2 py-4 justify-center items-center space-x-1  mt-24 '>
    <ProfileImage user={user} />
    <ProfileData user={user} logOut={logOut} />
    </div>
  )
}

export default Profile