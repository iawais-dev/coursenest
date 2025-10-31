import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";
import { CourseModel } from "../../models/course.model.js";

interface AuthReq extends Request {
    user: {
        userId:string
    }
}

export const newLecture = async (req:AuthReq, res:Response) =>{
    try {
        const teacher = req.user.userId
        const {title, description, thumbnail,videoUrl,courseId} = req.body

        const newLecture = await LectureModel.create({
            title,
            description,
            videoUrl,
            thumbnail,
            createdBy:teacher,
            course:courseId
        })

        await CourseModel.findByIdAndUpdate(courseId,{
            $push:{lectures: newLecture._id}
        })

        res.status(201).json({message:'new lecture created',lecture:newLecture})
    } catch (error) {
        res.status(500).json({message:'error in adding lecture',error})
    }
}