import type { Request, Response } from "express";
import { UserModel } from "../../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const loginController = async (req:Request,res:Response) => {
    const {email,password} = req.body
    try {
        const User = await UserModel.findOne({email:email})
        if(!User){
          res.status(409).json({message:"email & password combination doesnt match"})
        }
        else{
            const verifyPass = await bcrypt.compare(password,User.password)

            if(!verifyPass){
          res.status(401).json({message:"email & password combination doesnt match"})
            }
            else{
             const payload = {userId:User.id}
             const token = jwt.sign(payload,process.env.JWT_SECRET_KEY!,{expiresIn:'1d'})

             res.cookie("token",token,{
                maxAge: 1000 * 60 * 60 * 24,
                httpOnly:true,
                sameSite:"strict",
                // secure:
             })

             res.status(200).json({message:"user is loggedIn",user:{
                username:User.username,
                email:User.email,
             }})
            }
        }
    } catch (error) {
        res.status(500).json({message:"error in loggin",error})
        console.error(error)
    }
}

export default loginController