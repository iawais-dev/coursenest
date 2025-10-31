'use client'
import { me } from "@/services/AuthServices";
import { createContext, useEffect, useState } from "react";


export const userContext = createContext<any>(null)

export const UserProvider =  ({children}:{children: React.ReactNode})=>{
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const fetchDetails = async ()=>{
            await me()
            .then(res => setUser(res.data))
            .catch(()=>setUser(null))
        }
        fetchDetails()
    },[])

    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
