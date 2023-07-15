import { UserAuth } from '@/app/context/AuthContext'
import React from 'react'
function FacebookBtn() {
  const { singInByFacebook } = UserAuth()


  const handleBtn = async ()=>{
    try{
      await singInByFacebook()
    }catch(error){
      console.log(error)
    }
  }

  return (
    <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    onClick={handleBtn}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-facebook mr-3"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>
    FaceBook
  </button>
  )
}

export default FacebookBtn