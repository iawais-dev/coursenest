import { courseSchema } from "@/schemas/course.schema";
import { lectureSchema } from "@/schemas/lecture.schema";
import axios from "axios";
import { ParamValue } from "next/dist/server/request/params";
import z from "zod";



const Api = axios.create({
    baseURL:"http://localhost:10000/api/course",
    withCredentials: true
})


export const newCourse = (values : z.infer<typeof courseSchema>)=>{

    const formData = new FormData()

    formData.append('title',values.title)
    formData.append('description',values.description)
    formData.append('category',values.category)
    formData.append('price',values.price)
    formData.append('thumbnail',values.thumbnail)


   return  Api.post('/',formData,{
    headers: {'Content-Type': 'multipart/form-data'}
   })
}


export const AllLectures = (courseId: ParamValue)=>{
    return Api.get(`/${courseId}/lectures`)
}

export const AddNewLecture = ( courseId :ParamValue ,values: z.infer<typeof lectureSchema>)=>{
    const formData = new FormData()

    formData.append('title',values.title)
    formData.append('description',values.description)
    formData.append('videoUrl',values.videoUrl)
    formData.append('thumbnail',values.thumbnail)

    return Api.post(`${courseId}/lectures`,formData,{
        headers: {'Content-Type': 'multipart/form-data'}
    })
}