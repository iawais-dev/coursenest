'use client'
import { AllLectures } from '@/services/course.services'
import Image from 'next/image'
import { useParams } from 'next/navigation'
// import { AllLectures } from '@/services/lecture.services'
import React, { useEffect, useState } from 'react'

function LectureList() {

    const {id} = useParams()
    const [lectures, setLectures] = useState<any[]>([])

    useEffect(()=>{
       const fetchData = async ()=>{
        await AllLectures(id)
        .then(res=>{
            setLectures(res.data.lectures)
            console.log(res.data)
        })
       }

       fetchData()
    },[])



  return (
    <div>
        {lectures.length > 0 ? (
  lectures.map((lecture) => (
    <div key={lecture._id}>
        <h2>{lecture.title}</h2>
        <p>{lecture.description}</p>
        <img 
         src={lecture.thumbnail}
         alt='thumbnail'
         width={400}
         height={200}
        />
        <p>{lecture.videoUrl}</p>
    </div>
  ))
) : (
  <p>No lectures yet</p>
)}

    </div>
  )
}

export default LectureList