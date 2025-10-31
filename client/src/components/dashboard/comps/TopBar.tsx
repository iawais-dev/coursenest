'use client'
import { Bell, GraduationCap, Users } from 'lucide-react'
import React from 'react'
import { Button } from '../../ui/button'
import { useRouter } from 'next/navigation'

type TopBarProps = {
    role: 'student' | 'teacher',
    username: string,
    userId?: string
}

function TopBar({ role, username, userId }: TopBarProps) {
    const router = useRouter()

    const handleBecomeTeacher = ()=>{
        router.push('/become-a-teacher')
    }
    return (
        <div className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-foreground">{
                                username
                            }</h2>
                            {
                                role === "student" ?
                                    <p className="text-xs text-muted-foreground">Student ID: #{userId || 'N/A'}</p>
                                    :
                                    <p className="text-xs text-muted-foreground">Teacher Portal, ID: #{userId || 'N/A'}</p>
                            }
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </Button>
                        {
                            role === 'student' ?
                                <Button onClick={handleBecomeTeacher} className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                                    <Users className="w-4 h-4 mr-2" />
                                    Become a Teacher
                                </Button>

                                :
                                <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                                    <Users className="w-4 h-4 mr-2" />
                                    Manage Courses
                                </Button>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar