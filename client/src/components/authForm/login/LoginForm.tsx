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
// import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter()

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
         router.push('/dashboard')
       } catch (error) {
         console.log(error)
         toast.error("signIn error")
       }
    }

    const handleSignupClick = ()=>{
        router.push('/signup')
    }
  return (
    <div>
        <div className="text-center mb-8">
         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
           <Lock className="w-8 h-8 text-primary" />
         </div>
         <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">Welcome Back</h1>
         <p className="text-[var(--text-muted)]">Sign in to continue your learning journey</p>
       </div>
    <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg p-5 bg-white shadow-2xl rounded-xl  mx-auto">
          <div className="space-y-2">
            <div className="relative  ">
              <ShadecnFormField name='email' placeholder='email' label='Email' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' control={form.control} />
              <Mail className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" />
             <ShadecnFormField name='password' placeholder='password' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Password' control={form.control} />

            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
              <span className="text-[var(--text-muted)]">Remember me</span>
            </label>
            <button type="button" className="text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">or</span>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" className="h-12 border-border hover:border-primary transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button type="button" variant="outline" className="h-12 border-border hover:border-primary transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </Button>
          </div> */}

          <p className="text-center text-sm text-[var(--text-muted)] mt-6">
            Don't have an account?{' '}
            <button onClick={handleSignupClick} type="button" className="text-primary font-semibold hover:underline">
              Sign up
            </button>
          </p>
        </form>
    </Form>    
    </div>
  )
}

export default LoginForm