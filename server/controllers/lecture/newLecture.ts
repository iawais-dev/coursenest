import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";
import { CourseModel } from "../../models/course.model.js";


export const newLecture = async (req:Request, res:Response) =>{
    try {
        const teacher = req.user?.userId
        const {id} = req.params
        const {title, description,videoUrl} = req.body

        if(!req.file) return res.status(404).json({message:'thumbnail not found'})

        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/thumbnails/lectures/${req.file.filename}`

        const newLecture = await LectureModel.create({
            title,
            description,
            videoUrl,
            thumbnail:fileUrl,
            createdBy:teacher,
            course:id
        })

        await CourseModel.findByIdAndUpdate(id,{
            $push:{lectures: newLecture._id}
        })

        res.status(201).json({message:'new lecture created', newLecture})
    } catch (error) {
        res.status(500).json({message:'error in adding lecture',error})
    }
}