import type { NextFunction, Request, Response } from "express";
import { UserModel } from "../../models/user.model.js";


export const upgradeToTeacher = async (req:Request,res:Response,next:NextFunction)=>{
    console.log("req.user:", (req as any).user);

    const userId = (req as any ).user.userId
    const {title,qualification,bio,experience,languages} = req.body

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                role:"teacher",
                title,
                qualification,
                bio,
                experience,
                languages       
            }
        )

        res.status(200).json({message:'Upgraded to Teacher'})

    } catch (error) {
       res.status(500).json({ message: "Error upgrading role", error })
    }
}