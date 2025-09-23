'use client'
import ShadecnFormField from '@/components/reusable/ShadecnFormField'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signupSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'

function SignupForm() {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues:{
            username:'',
            email:'',
            password:''
        }
    })

    const onSubmit = (values : z.infer<typeof signupSchema>)=>{
       console.log(values)
    }

  return (
    <div>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
      <ShadecnFormField name='username' placeholder='username' label='username' control={form.control} />
      <ShadecnFormField name='email' placeholder='email' label='email' control={form.control} />
      <ShadecnFormField name='password' placeholder='password' label='password' control={form.control} />
      <Button type='submit' >Sign Up</Button>
        </form>
        </Form>      
    </div>
  )
}

export default SignupForm