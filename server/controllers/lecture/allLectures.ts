import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";


export const allLectures = async (req:Request , res:Response)=>{
    try {
        
        const {id} = req.params
        const teacher = req.user?.userId

        if(!id) return res.status(404).json({message:'courseId not found'})

        const lectures = await LectureModel.find({
            course: id,
            createdBy: teacher
        })

        res.status(200).json({message:'all lectures', lectures})
    } catch (error) {
        res.status(500).json({message:'error in fetching all lectures',error})
    }
}