import type { Request, Response } from "express";
import { QuizModel } from "../../models/quiz.model.js";

interface AuthReq extends Request {
    user : {
        userId : string
    }
}

export const updateQuiz = async (req:AuthReq, res:Response)=>{
    try {
        const quizId = req.params.id
        const {question,options,answer} = req.body

        const quiz = await QuizModel.findById(quizId)

        if(!quiz) return res.status(404).json({message:'quiz not found'})
        
        if(quiz.createdBy.toString() !== req.user.userId) return res.status(403).json({message:'user is not authorized to update the quiz'})

       const updatedQuiz = await QuizModel.findByIdAndUpdate(quizId,{
        question,
        options,
        answer
       },{new:true})


       res.status(200).json({message:'quiz is updated',updatedquiz:updatedQuiz})

    } catch (error) {
        res.status(500).json({message:'error in updating quiz',error})
    }
}