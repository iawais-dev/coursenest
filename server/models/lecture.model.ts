import { Document, model, Schema, Types } from "mongoose";

interface ILecture extends Document {
    title: string,
    videoUrl: string,
    description: string,
    thumbnail: string,
    createdBy: Types.ObjectId,
    quizzes : Types.ObjectId,
    course: Types.ObjectId
}

const lectureSchema = new Schema<ILecture>({

    title: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    quizzes: {
        type: Schema.Types.ObjectId,
        ref: "Quiz"
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },


})

export const LectureModel = model("Lecture", lectureSchema)