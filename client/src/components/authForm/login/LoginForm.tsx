'use client'
import ShadecnFormField from '@/components/reusable/ShadecnFormField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { loginSchema } from '@/schemas/auth.schema'
import { loginUser } from '@/services/AuthServices'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {z} from 'zod'

function LoginForm() {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })
 
    const onSubmit = async (values : z.infer<typeof loginSchema>)=>{
       try {
         await loginUser(values)
         toast.success("signIn successfully") 
       } catch (error) {
         console.log(error)
         toast.error("signIn error")
       }
    }
  return (
    <div>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
             <ShadecnFormField name='email' placeholder='email' label='email' control={form.control} />
             <ShadecnFormField name='password' placeholder='password' label='password' control={form.control} />
             <Button type='submit' >Sign In</Button>
        </form>
    </Form>    
    </div>
  )
}

export default LoginForm