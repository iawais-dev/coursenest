import { Document, model, Schema, Types } from "mongoose";

interface ILecture extends Document {
    title:string,
    videoUrl:string,
    duration: string,
    createdBy: Types.ObjectId,
    course: Types.ObjectId
}

const lectureSchema = new Schema<ILecture>({

    title:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    duration:{
        type:String,
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

export const LectureModel = model("Lecture",lectureSchema)