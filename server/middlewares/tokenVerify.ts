import type { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'






export const tokenVerify = async (req:Request ,res:Response,next:NextFunction)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(400).json({message:"token invalid"})
    }
    else {
        try {
            let decode = jwt.verify(token,process.env.JWT_SECRET_KEY!) as any
            req.user = decode

            console.log(decode)

            next()
        } catch (error) {
  console.error(error)
  return res.status(401).json({ message: "token verification failed" })
}

    }
}