import type { Request, Response } from "express";
import { CourseModel } from "../../models/course.model.js";

interface AuthReq extends Request {
    user: {
        userId: string
    }
}

export const newCourse = async (req: AuthReq, res: Response) => {

    console.log(req.user)
    try {
        const teacher = req.user
        const { title, description, price, category, thumbnail } = req.body
          
        const course = await CourseModel.create({
            title,
            description,
            price,
            category,
            thumbnail,
            createdby:teacher.userId
        })

        res.status(201).json({message:'new course created',course})

    } catch (error) {
       res.status(500).json({message:'error in making new course',error})
    }

}