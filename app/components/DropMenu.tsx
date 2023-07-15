import Link from 'next/link'
import React from 'react'
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation';

function DropMenu() {
  const { logOut} = UserAuth()
  const router = useRouter()

  const handleLogout = ()=>{
      (document.querySelector('.drop-menu') as HTMLElement).classList.add('hidden')
      logOut()
      router.push('/')
    }

  return (
    <div className={`drop-menu hidden font-semibold absolute bottom-[-170%] left-[-150%]`} >
    <span className="px-4  rounded mb-0.5 block bg-white/60 text-[var(--main-color)] hover:font-bold hover:bg-white transition hover:text-[var(--sec-color)]">
      <Link href="/account">Account</Link>
    </span>
    <span className="px-4  rounded mb-0.5 block bg-white/60 text-[var(--main-color)] hover:font-bold hover:bg-white transition hover:text-[var(--sec-color)]">
      <button
      onClick={handleLogout}
      >
        Logout
      </button>
    </span>
  </div>
  )
}

export default DropMenu