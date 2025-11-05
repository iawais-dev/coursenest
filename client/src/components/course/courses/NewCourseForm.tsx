'use client'
import React from 'react'
import { Form } from '../../ui/form'
import { Lock, Mail, GraduationCap } from 'lucide-react'
import ShadecnFormField from '../../reusable/ShadecnFormField'
import { Button } from '../../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { loginUser, upgradeToTeacher } from '@/services/auth.services'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { loginSchema } from '@/schemas/auth.schema'
import { teacherFormSchema } from '@/schemas/teacherform.schema'
import { courseSchema } from '@/schemas/course.schema'
import { newCourse } from '@/services/course.services'



function NewCourse() {
       const router = useRouter()

    const form = useForm<z.infer<typeof courseSchema>>({
        resolver: zodResolver(courseSchema),
        defaultValues:{
             title:'',
             description:'',
             price:'0',
             category:'',
             thumbnail: undefined,

        }
    })
 
    const onSubmit = async (values : z.infer<typeof courseSchema>)=>{
       try {
        const  { data } = await newCourse(values)
        //  toast.success("") 
         router.push(`/course/${data.course._id}/lectures`)
       } catch (error) {
         console.log(error)
         toast.error("Something went wrong!")
       }
    }

  return (
       <div>
        <div className="text-center mb-8 pt-20">
         {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
           <GraduationCap className="w-8 h-8 text-primary" />
         </div> */}
         <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">Basic Details</h1>
         {/* <p className="text-[var(--text-muted)]">Fill the form to continue your  <span className='font-bold'>teaching</span> journey</p> */}
       </div>
    <Form  {...form}>

        <form encType='multipart/form-data' onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg p-5 bg-muted shadow-2xl shadow-muted rounded-xl  mx-auto">
          <div className="space-y-2">
            <div className="relative  ">
              <ShadecnFormField name='title' placeholder='e.g. “Web Developer & Instructor”' label='Title' inputClass='text-[var(--text-muted)] pl-10 h-12 bg-background border-border focus:border-primary transition-colors' control={form.control} />
              {/* <Mail className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
            </div>
          </div>

           <div className="space-y-2">
            <div className="relative  ">
              <ShadecnFormField name='description' placeholder='e.g. “Web Developer & Instructor”' label='description' inputClass='text-[var(--text-muted)] pl-10 h-12 bg-background border-border focus:border-primary transition-colors' control={form.control} />
              {/* <Mail className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
            </div>
          </div>

          
          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='category' placeholder='e.g. development' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Category' control={form.control} />

            </div>
          </div>
         
          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='thumbnail' placeholder='' type='file' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' label='Thumbnail' control={form.control} />

            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              {/* <Lock className="absolute left-3 top-1/2  w-5 h-5 text-muted-foreground" /> */}
             <ShadecnFormField name='price' placeholder='5$' inputClass='pl-10 h-12 bg-background border-border focus:border-primary transition-colors' type='number' label='price' control={form.control} />

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

export default NewCourse