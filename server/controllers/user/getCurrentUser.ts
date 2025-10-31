import type { Request, Response } from "express"
import { UserModel } from "../../models/user.model.js"


export const getCurrentUser = async (req:Request, res:Response) =>{
    try {
        const userId = (req as any).user.userId
        const user  = await UserModel.findById(userId)

        if(!user)
            return res.status(404).json({message:"user not found"})

        else {
            res.status(200).json({user})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error fetching user details" });
    }
}