import type { Request, Response } from "express";
import { CourseModel } from "../../models/course.model.js";
import { UserModel } from "../../models/user.model.js";


export const newCourse = async (req: Request, res: Response) => {

    console.log(req.user)
    try {
        const teacher = req.user?.userId
        const { title, description, price, category } = req.body

        if(!req.file) return res.status(404).json({message:'thumbnail not found'})
        
        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/thumbnails/courses/${req.file?.filename}`
          
        const course = await CourseModel.create({
            title,
            description,
            price,
            category,
            thumbnail:fileUrl,
            createdby:teacher
        })

        await UserModel.findByIdAndUpdate(teacher,{
            $push : {courses: course._id}
        })

        res.status(201).json({message:'new course created',course})

    } catch (error) {
       res.status(500).json({message:'error in making new course',error})
    }

}