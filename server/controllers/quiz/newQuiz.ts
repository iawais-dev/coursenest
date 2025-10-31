import type { Request, Response } from "express";
import { QuizModel } from "../../models/quiz.model.js";
import { LectureModel } from "../../models/lecture.model.js";

interface AuthReq extends Request {
    user : {
        userId : string
    }
}

export const newQuiz = async (req:AuthReq, res:Response) =>{
    try {
        const teacher = req.user.userId
        const {question,options,answer,lectureId} = req.body

        const lecture = await LectureModel.findById(lectureId)
        if(!lecture) return res.status(404).json({message:'lecture not found'})

            
        const newQuiz = await QuizModel.create({
            question,
            options,
            answer,
            createdBy:teacher,
            lecture:lectureId
        })

        await LectureModel.findByIdAndUpdate(lectureId,{
            $push : {quizzes: newQuiz._id}
        })

        res.status(201).json({message:'quiz created',quiz:newQuiz})
        
    } catch (error) {
        res.status(500).json({message:"error in creating quiz",error})
    }
}