'use client'
import React from 'react'
import { Form } from '../ui/form'
import { Lock, Mail, GraduationCap } from 'lucide-react'
import ShadecnFormField from '../reusable/ShadecnFormField'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { loginUser, upgradeToTeacher } from '@/services/AuthServices'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { loginSchema } from '@/schemas/auth.schema'
import { teacherFormSchema } from '@/schemas/teacherform.schema'


function BecomeTeacher() {
       const router = useRouter()

    const form = useForm<z.infer<typeof teacherFormSchema>>({
        resolver: zodResolver(teacherFormSchema),
        defaultValues:{
            title: '',
            bio: '',
            qualification: '',
            experience: '0',
            languages: '',
        }
    })
 
    const onSubmit = async (values : z.infer<typeof teacherFormSchema>)=>{
       try {
        //  await loginUser(values)
         await upgradeToTeacher(values)
         toast.success("You are now teacher") 
         router.push('/dashboard/')
       } catch (error) {
         console.log(error)
         toast.error("Something went wrong!")
       }
    }

    const handleSignupClick = ()=>{
        router.push('/signup')
    }
  return (
       <div>
        <div className="text-center mb-8">
         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
           <GraduationCap className="w-8 h-8 text-primary" />
         </div>
         <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">Beome A Teacher</h1>
         <p className="text-[var(--text-muted)]">Fill the form to continue your  <span className='font-bold'>teaching</span> journey</p>
       </div>
    <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg p-5 bg-muted shadow-2xl shadow-muted rounded-xl  mx-auto">
          <div className="space-y-2">
            <div className="relative  ">
              <ShadecnFormField name='title' placeholder='e.g. “Web Developer & Instructor”' label='Title' inputClass='text-[var(--text-muted)] pl-10 h-12 bg-background border-border focus:border-primary transition-colors' control={form.control} />
              {/* <Mail className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='bio' placeholder='bio' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Bio' control={form.control} />

            </div>
          </div>
          
          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='qualification' placeholder='e.g. BS Computer Science, MSc Physics' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Education Qualification' control={form.control} />

            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='experience' placeholder='(e.g. 1-10 years)' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' type='number' label='Years of Experience' control={form.control} />

            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='languages' placeholder='e.g. English, Urdu' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Language you can Teach in' control={form.control} />

            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>

        </form>
    </Form>    
    </div>
  )
}

export default BecomeTeacher