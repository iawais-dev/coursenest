// import type { Document } from "mongoose";
import { model, Schema, Document, Types } from "mongoose";

interface ICourse extends Document {
 title:string,
 description:string,
 price:number,
 category:string,
 thumbnail:string,
 createdby: Types.ObjectId,
 lecture: [],
 quiz: [],
}

const courseSchema = new Schema<ICourse>({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    thumbnail:{
        type: String,
        required:true
    },
    createdby:{
        type: Schema.Types.ObjectId,
        ref:"UserModel"
    },
    lecture:{
        type: [],
        required:true
    },
    quiz:{
        type: [],
        required:true
    },

})

export const Course = model<ICourse>("CourseModel",courseSchema)