
import Image from 'next/image'
import React from 'react'
import icon from "../../assets/images/profile.png";
function ProfileImage({user}:{user : any}) {

  return (
    <div className='w-full py-5 mx-auto md:mx-0 md:w-1/5 h-full justify-center items-center '>
      {user.photoURL ?
        <img 
        width={100}
        height={100}
        src={user.photoURL}
        alt={user.displayName}
        className='mx-auto h-full rounded-xl'
        />
       :
        <Image 
        width={100}
        height={100}
        loading='lazy'
        src={icon}
        alt={`User Image`}
        className='mx-auto h-full rounded-xl' />
       }

    </div>
  )
}

export default ProfileImage