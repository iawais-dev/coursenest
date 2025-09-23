import ShadecnFormField from '@/components/reusable/ShadecnFormField'
import { Form } from '@/components/ui/form'
import { loginSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'

function LoginForm() {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })
 
    const onSubmit = (values : z.infer<typeof loginSchema>)=>{
        console.log(values)
    }
  return (
    <div>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
             <ShadecnFormField name='email' placeholder='email' label='email' control={form.control} />
             <ShadecnFormField name='password' placeholder='password' label='password' control={form.control} />
        </form>
    </Form>    
    </div>
  )
}

export default LoginForm