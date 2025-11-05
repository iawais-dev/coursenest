import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";
import { CourseModel } from "../../models/course.model.js";


export const newLecture = async (req:Request, res:Response) =>{
    try {
        const teacher = req.user?.userId
        const {id} = req.params
        const {title, description} = req.body

        if(!req.files) return res.status(404).json({message:'thumbnail not found'})

        const files = req.files as {[fieldName :string]: Express.Multer.File[]}
        const thumbnailFile = files.thumbnail
        const videoFile = files.videoUrl

        const thumbnail = `${req.protocol}://${req.get('host')}/uploads/thumbnails/lectures/${thumbnailFile}`
        const videoUrl =`${req.protocol}://${req.get('host')}/uploads/videos/${videoFile}`

        const newLecture = await LectureModel.create({
            title,
            description,
            videoUrl,
            thumbnail,
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