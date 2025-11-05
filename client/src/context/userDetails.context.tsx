'use client'
import { Me } from "@/services/auth.services";
import { createContext, useEffect, useState } from "react";


export const userContext = createContext<any>(null)

export const UserProvider =  ({children}:{children: React.ReactNode})=>{
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchDetails = async ()=>{
            await Me()
            .then(res => setUser(res.data))
            .catch(()=>setUser(null))
            .finally(()=>setLoading(false))
        }
        fetchDetails()
    },[])

//    const isNewUser = Date.now() - new Date(user?.createdAt).getTime() 

    return (
        <userContext.Provider value={{user,setUser,loading}}>
            {children}
        </userContext.Provider>
    )
}
