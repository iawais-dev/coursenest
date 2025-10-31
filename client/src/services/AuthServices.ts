import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import { teacherFormSchema } from "@/schemas/teacherform.schema";
import axios from "axios";
import z from "zod";

const Api = axios.create({
    baseURL:"http://localhost:10000/api/user",
    withCredentials:true
})


export const signupUser = (values: z.infer <typeof signupSchema>)=>{
    return Api.post('/signup',values)
}

export const loginUser = (values: z.infer <typeof loginSchema>)=>{
    return Api.post('/login',values)
}



export const upgradeToTeacher = (values: z.infer <typeof teacherFormSchema>)=>{
    return Api.put('/upgrade-teacher',values)
}

export const me = ()=>{
    return Api.get('/me')
}