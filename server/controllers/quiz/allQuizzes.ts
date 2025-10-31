import type { Request, Response } from "express";
import { QuizModel } from "../../models/quiz.model.js";


export const allQuizzes = async (req:Request, res:Response) =>{
    try {
        const quizzes = await QuizModel.find()

        res.status(200).json({message:'all quizzes',quizzes:quizzes})
    } catch (error) {
        res.status(500).json({message: 'error in fetching all quizzes',error})
    }
}