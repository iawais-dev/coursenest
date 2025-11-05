import z from "zod";

export const courseSchema = z.object({
    title: z.string().min(5,'minimum 5 characters').max(20,'maximum 20 characters'),
    description: z.string().min(5,'minimum 5 characters').max(20,'maximum 20 characters'),
    price: z.string(),
    category: z.string().min(5,'minimum 5 characters').max(20,'maximum 20 characters'),
    thumbnail: z.file().refine((file)=>file instanceof File,'Thumbnail is required'),
})