import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";
import { CourseModel } from "../../models/course.model.js";

interface AuthReq extends Request {
    user : {
        userId:string
    }
}

export const deletetLecture = async (req:AuthReq,res:Response) =>{
    try {
        const lecutreId = req.params.id
        const lecture = await LectureModel.findById(lecutreId)

        if (!lecture) return res.status(404).json({ message: 'lecture not found' });


        if(lecture?.createdBy.toString() !== req.user.userId) return res.status(403).json({message:'user is not authorized to delete the lecture'})
        const delLecture = await LectureModel.findByIdAndDelete(lecutreId)

        await CourseModel.findByIdAndUpdate(lecture.course,{
            $pull: {lectures: lecture._id}
        })


        res.status(200).json({message:'lecture deleted',delLecture})
    } catch (error) {
        res.status(500).json({message:'error in deleting lecture',error})
    }
}