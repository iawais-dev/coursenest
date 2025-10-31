import type { Request, Response } from "express";
import { QuizModel } from "../../models/quiz.model.js";
import { LectureModel } from "../../models/lecture.model.js";

interface AuthReq extends Request {
    user :{
        userId: string
    }
}

export const deleteQuiz = async (req:AuthReq, res:Response) =>{
    try {
        const quizId = req.params.id
        
        const quiz = await QuizModel.findById(quizId)
        
        if(!quiz) return res.status(404).json({message:'quiz not found'})
            
        if(quiz.createdBy.toString() !== req.user.userId ) return res.status(403).json({message:'user is not autorized to delete quiz'})
            
            
          const delQuiz = await QuizModel.findByIdAndDelete(quizId)

          await LectureModel.findByIdAndUpdate(quiz.lecture,{
            $pull : {quizzes : delQuiz}
          })

        res.status(200).json({message:'quiz deleted',delQuiz})

    } catch (error) {
        res.status(500).json({message:'error in deleting quiz', error})
    }
}