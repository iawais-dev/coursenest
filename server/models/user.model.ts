import mongoose, { Document } from "mongoose";

type UserModelType = {
    username : string,
    email: string,
    password:string,
    role : 'student' | 'teacher',
    title ?: string,
    bio ?: string,
    qualification ?: string,
    experience ?: string,
    languages ?: string,

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
    },
    //teacher user model
    title : {
        type:String,
        // required:true
        // required : function () {return this.role === 'teacher'}
    },
    bio : {
        type:String,
        // required:true
    },
    qualification : {
        type:String,
        // required:true
    },
    experience : {
        type:String,
        // required:true
    },
    languages : {
        type:String,
        // required:true
    },
})

export const UserModel = mongoose.model<UserDocument>('User',UserSchema)
