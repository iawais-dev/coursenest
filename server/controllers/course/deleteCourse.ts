import type { Request, Response } from "express";
import { CourseModel } from "../../models/course.model.js";

interface AuthReq extends Request {
    user : {
        userId: string
    }
}

export const deleteCourse = async (req:AuthReq,res:Response)=>{

    try {
        const courseId = req.params.id
        const course = await CourseModel.findById(courseId)

        if(!course) return res.status(404).json({message:'course not found'})
        
        if(course.createdby.toString() !== req.user.userId) return res.status(403).json({message:'user not authorized to deleted the course'})

        const delcourse = await CourseModel.findByIdAndDelete(courseId)

        res.status(200).json({message:'course deleted!',deleted:delcourse})

    } catch (error) {
        res.status(500).json({message:'error in deletion of course',error})
    }

}