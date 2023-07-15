import { useRouter } from 'next/navigation'
import React from 'react'

function ProfileData({user, logOut}:{user : any , logOut:any}) {
    const router = useRouter()
    const handleLogout = ()=>{
        logOut()
        router.push('/')
    }
  return (
    <div className='w-full md:w-4/5 px-6 border-t-2 md:border-t-0  md:border-s-2 border-black/20'>
       {user.displayName &&  <h3 className='text-center md:text-start py-5 font-semibold text-[var(--sec-color)] w-full border-b-2 border-black/20'>{user.displayName}</h3>}
        <h3 className='text-center md:text-start py-5 font-semibold text-[var(--sec-color)] w-full border-b-2 border-black/20'>{user.email && user.email}</h3>
        <button
        onClick={handleLogout}
         className='cursor-pointer px-12 py-3 border-2 block text-[var(--sec-color)] rounded-2xl font-semibold text-lg  border-black/20 my-4 mx-auto md:mx-0 hover:bg-[var(--main-color)] hover:text-[var(--sec-text)]'
        >
            Logout
        </button>
    </div>
  )
}

export default ProfileData