import type { Request, Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "../../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signupController = async (req:Request,res:Response) => {
    const {username,email,password} = req.body
    try {
        const UserExist = await UserModel.findOne({email:email})
        if(UserExist){
            res.status(409).json({message:'user already exists'})
        }
        else{
            const salt = 10
            const hashPassword = await bcrypt.hash(password,salt)

            const user = await UserModel.create({
                username,
                email,
                password:hashPassword
            })
            const payload = {userId: user._id}
            const token = jwt.sign(payload,process.env.JWT_SECRET_KEY!,{expiresIn:'1d'})

            res.cookie("token",token,{
                httpOnly:true,
                maxAge: 1000 * 60 * 60 * 24 ,
                sameSite: 'strict',
                // secure: 
            })
            res.status(201).json({
                message:"signup successful",
                user:{
                    id:user._id,
                    username:user.username,
                    email:user.email,
                }})
        }
    } catch (error) {
        res.status(500).json({message:"error in signup",error})
        console.error(error)
    }
}

export default signupController