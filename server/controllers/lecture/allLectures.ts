import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";


export const allLectures = async (req:Request , res:Response)=>{
    try {
        const lectures = await LectureModel.find()

        res.status(200).json({message:'all lectures',lectures:lectures})
    } catch (error) {
        res.status(500).json({message:'error in fetching all lectures',error})
    }
}