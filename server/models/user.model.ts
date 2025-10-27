import mongoose, { Document } from "mongoose";

type UserModelType = {
    username : string,
    email: string,
    password:string,
    role : 'student' | 'teacher'
}

interface UserDocument extends UserModelType, Document {} 

const UserSchema  = new mongoose.Schema<UserDocument>({
    username : {
        type: String,
        required:true
    },
    email : {
        type:String,
        required:true
    } ,
    password : {
        type:String,
        required:true
    } ,
    role : {
        type:String,
        enum: ['student','teacher'],
        default:"student"
    }
})

export const UserModel = mongoose.model<UserDocument>('User',UserSchema)
