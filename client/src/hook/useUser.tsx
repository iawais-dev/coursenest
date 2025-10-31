'use client'
import { userContext } from "@/context/userDetails.context"
import { useContext } from "react"


export const useUser = ()=>{
    const ctx = useContext(userContext)

    if(!ctx) return <p>no user available</p>

    return ctx
    
}