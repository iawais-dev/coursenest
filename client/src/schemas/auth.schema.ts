import {z} from 'zod'

const loginSchema = z.object({
     email: z.email(),
     password:
     z.string()
     .min(3,{message:"minimum 3 characters required"})
     .min(14,{message:"maximum 14 characters allowed"})
     .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{14,}$/gm,{message:"please ensure correct password"})
})


const signupSchema = loginSchema.extend({
     username:
      z.string()
     .min(3,{message:"minimum 3 characters required"})
     .min(14,{message:"maximum 14 characters allowed"})
})





export { loginSchema , signupSchema}