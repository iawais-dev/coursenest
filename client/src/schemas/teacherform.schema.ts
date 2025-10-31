import z from "zod";

export const teacherFormSchema = z.object({
    title:z.string().min(5,'atleast 5 characters').max(12,'atmost 12 characters'),
    bio:z.string().min(5,'atleast 5 characters').max(12,'atmost 12 characters'),
    qualification:z.string().min(5,'atleast 5 characters').max(12,'atmost 12 characters'),
    experience:z.string(),
    languages:z.string().min(5,'atleast 5 characters').max(12,'atmost 12 characters'),
})