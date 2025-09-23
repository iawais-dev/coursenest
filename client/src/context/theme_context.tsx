"use client"

import { createContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'
type ThemeContextType = {
    theme : Theme;
    themeToggler : ()=> void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider ({children}:{children: React.ReactNode}) {
const [theme, setTheme] = useState<Theme>("light")

//check if there is already theme set
useEffect(()=>{
    const saved = localStorage.getItem('theme') as Theme | null

    if(saved){
        setTheme(saved)
        document.documentElement.classList.add(saved)
    }
    else {
        const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const defaultTheme = preferDark ? "dark" : "light"
        setTheme(defaultTheme)
        document.documentElement.classList.add(defaultTheme)
        
    }
},[])

const themeToggler = ()=> {
const newTheme = theme === 'light' ? "dark" :"light"

document.documentElement.classList.remove(theme)
document.documentElement.classList.add(newTheme)

localStorage.setItem("theme",newTheme)
setTheme(newTheme)
}

return (
    <ThemeContext.Provider value={{theme,themeToggler}}>
{children}
    </ThemeContext.Provider>
)

}

