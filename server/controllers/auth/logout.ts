import type { Request, Response } from "express"


const logoutController = async (req:Request,res:Response) => {
    try {
        res.clearCookie("token",{
            httpOnly:true,
            sameSite:"strict",
            // secure: true for production 
        })
        res.status(200).json({message:"user loggedOut"})
    } catch (error) {
        res.status(500).json({message:"error in gettin loggedOut",error})
        console.error(error)
    }
}

export default logoutController