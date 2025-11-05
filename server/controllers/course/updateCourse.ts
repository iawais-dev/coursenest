import type { Request, Response } from "express"
import { CourseModel } from "../../models/course.model.js"


// interface AuthReq extends Request {
//     user:{
//         userId: string
//     }
// }



export const updateCourse = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.id
        const course = await CourseModel.findById(courseId)
        const { title, description, price, category, thumbnail } = req.body

        if (!course) return res.status(404).json({ message: 'course not found' })

        if(course?.createdby.toString() !== req.user?.userId) return res.status(403).json({message:"user is not autorized to update this course"})


        const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, {
            title,
            description,
            price,
            category,
            thumbnail
        },    
         { new: true }
        ) 


        res.status(200).json({ message: 'course updated!', updatedCourse })
    } catch (error) {
        res.status(500).json({ message: 'error in course updation', error })
    }
}