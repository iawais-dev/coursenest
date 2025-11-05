import { useUser } from '@/hook/useUser'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function ProtectedRoute({children}:{children:React.ReactNode}) {

    const router = useRouter()

    const { user, loading } = useUser()

    useEffect(()=>{
        if(!loading && !user){
            return router.push('/')
        }
    },[user,loading,router])

    if(loading) return <p>Loading ...</p>

    if(!user) return null
    

  return (
        children
        )
}

export default ProtectedRoute