
// interface ILecture extends Document {
//     title: string,
//     videoUrl: string,
//     description: string,
//     thumbnail: string,

// }

import z from "zod";

export const lectureSchema = z.object({
    title: z.string().min(5,'minimum 5 characters').max(20,'maximum 20 characters'),
    description: z.string().min(5,'minimum 5 characters').max(20,'maximum 20 characters'),
    videoUrl: z.file().refine((file)=> file instanceof File,'video is required'),
    thumbnail: z.file().refine((file)=>file instanceof File,'Thumbnail is required'),
})