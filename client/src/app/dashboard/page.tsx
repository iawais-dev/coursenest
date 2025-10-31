'use client'
import StudentDashboard from '@/components/dashboard/StudentDashboard'
import TeacherDashboard from '@/components/dashboard/TeacherDashboard'
import { useUser } from '@/hook/useUser'
import React from 'react'

function page() {

    const {user} = useUser()
    console.log(user)
  return (
    <>
     {
        user?.user.role === 'student' ? <StudentDashboard /> : <TeacherDashboard /> 
     }   
    </>
  )
}

export default page