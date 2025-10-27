import { Document, model, Schema, Types } from "mongoose";


interface IQuiz extends Document {
    question: String,
    options: string[],
    answer:string,
    createdBy: Types.ObjectId,
    course: Types.ObjectId,
}


const quizSchema = new Schema<IQuiz>({
 
    question:{
        type :String,
        required:true
    },
    options:[{
        type :String,
        required:true
    }],
    answer:{
        type :String,
        required:true
    },
     createdBy:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    course:{
        type: Schema.Types.ObjectId,
        ref:"Course"
    },
})

export const QuizModel = model<IQuiz>("Quiz",quizSchema)