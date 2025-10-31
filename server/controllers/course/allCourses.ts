import type { Request, Response } from "express";
import { CourseModel } from "../../models/course.model.js";



export const allCourses = async (req:Request, res:Response)=>{
    try {
        const courses = await CourseModel.find()

        res.status(200).json({message:'all courses',courses})
    } catch (error) {
        res.status(500).json({message:'error in getting all courses',error})
    }
}