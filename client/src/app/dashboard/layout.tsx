'use client'
import BottomNav from '@/components/dashboard/comps/BottomNav'
import TopBar from '@/components/dashboard/comps/TopBar'
import { useUser } from '@/hook/useUser'
import ProtectedRoute from '@/route/ProtectedRoute'
import React from 'react'

function layout({children}:{children :React.ReactNode}) {

    const {user,loading} = useUser()

    // if(loading) return <p>Loading Dashboard ...</p>

  return (
    <div>
      <ProtectedRoute>

     <TopBar role={user?.user.role} username='awais' userId='901348103' />
     <div>
        {children}
     </div>
     <BottomNav />

      </ProtectedRoute>
    </div>
  )
}

export default layout