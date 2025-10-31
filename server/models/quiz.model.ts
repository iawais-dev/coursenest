import { Document, model, Schema, Types } from "mongoose";


interface IQuiz extends Document {
    question: String,
    options: string[],
    answer:string,
    createdBy: Types.ObjectId,
    lecture: Types.ObjectId,
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
    lecture:{
        type: Schema.Types.ObjectId,
        ref:"Lecture"    
    },
})

export const QuizModel = model<IQuiz>("Quiz",quizSchema)