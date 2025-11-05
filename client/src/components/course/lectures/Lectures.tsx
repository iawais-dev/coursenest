'use client'
import React from 'react'
import LectureList from './LectureList'
import { LucideClipboardSignature, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

function Lectures() {
    const { id } = useParams()
    const route  = useRouter()
    
    const handleClick = ()=>{
        route.push(`/course/${id}/lectures/new-lecture`)
    }
  return (
    <div>
        <div>
            <h1>Lectures</h1>
             {/* <Link href={`/cpurse/${courseId}/lectures/new-lecture`} > */}
                                <Button onClick={handleClick} className="hidden sm:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                                    <LucideClipboardSignature className="w-4 h-4 mr-2" />
                                    Add Lecture
                                </Button>
                                {/* </Link> */}
        </div>
        <div>

            <LectureList />

        </div>
    </div>
  )
}

export default Lectures