import type { Request, Response } from "express";
import { LectureModel } from "../../models/lecture.model.js";
import { CourseModel } from "../../models/course.model.js";

interface AuthReq extends Request {
    user : {
        userId: string
    }
}

export const updateLecture = async (req:AuthReq,res:Response)=>{
    try {
        const lectureId = req.params.id
        const lecture = await LectureModel.findById(lectureId)
        const {title,description,videoUrl,thumbnail} = req.body

        if(!lecture) return res.status(404).json({message:'lecture not found'})

        if(lecture.createdBy.toString() !== req.user.userId) return res.status(403).json({message:'user not authorized to edit the lecture'})

        
        const updatedLecture = await LectureModel.findByIdAndUpdate(lectureId,{
            title,
            description,
            videoUrl,
            thumbnail,
        },{new:true})

  
        res.status(200).json({message:'lecture updated',updatedLecture})
        

    } catch (error) {
        res.status(500).json({message:'error in updating the lecture',error})
    }
}