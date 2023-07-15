import { UserAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProtectRoute({children}:{ children: any}) {
    const {user } = UserAuth()
    const router = useRouter()

    return user ? children :router.push('/')
}
