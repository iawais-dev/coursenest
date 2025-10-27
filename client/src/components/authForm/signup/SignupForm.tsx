'use client'
import ShadecnFormField from '@/components/reusable/ShadecnFormField'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signupSchema } from '@/schemas/auth.schema'
import { signupUser } from '@/services/AuthServices'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {z} from 'zod'

function SignupForm() {


  const router = useRouter()

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues:{
            username:'',
            email:'',
            password:''
        }
    })

    const onSubmit = async (values : z.infer<typeof signupSchema>)=>{
      //  console.log(values)
      try {
        await signupUser(values)
        toast.success("signup successfully")
      } catch (error) {
        console.log(error)
        toast.error("signup error")
      }
    }

    const handleSignInClick = ()=>{
      router.push('/login')
    }

  return (
    <div>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 max-w-lg p-5 bg-white shadow-2xl rounded-xl  mx-auto' >
      {/* <ShadecnFormField name='username' placeholder='username' label='username' control={form.control} />
      <ShadecnFormField name='email' placeholder='email' label='email' control={form.control} />
      <ShadecnFormField name='password' placeholder='password' label='password' control={form.control} />
      <Button type='submit' >Sign Up</Button> */}

        

          <div className="space-y-2">
            <div className="relative">
               <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
             <ShadecnFormField name='username' placeholder='username' label='username' control={form.control} inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors'  />

            </div>
          </div>

         <div className="space-y-2">
            <div className="relative  ">
              <Mail className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" />
              <ShadecnFormField name='email' placeholder='email' label='Email' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' control={form.control} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" />
             <ShadecnFormField name='password' placeholder='password' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Password' control={form.control} />

            </div>
          </div>


           <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-border text-primary focus:ring-primary" required />
            <span className="text-[var(--text-muted)]">
              I agree to the{' '}
              <button type="button" className="text-primary hover:underline">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-primary hover:underline">
                Privacy Policy
              </button>
            </span>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Signing up...' : 'Sign Up'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">or</span>
            </div>
          </div>

           <p className="text-center text-sm text-[var(--text-muted)] mt-6">
            Already have an account?{' '}
            <button onClick={handleSignInClick} type="button" className="text-primary font-semibold hover:underline">
              Sign in
            </button>
          </p>
        </form>
        </Form>      
    </div>
  )
}

export default SignupForm