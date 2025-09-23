'use client'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useTheme } from '@/hook/theme_hook'

function ToggleTheme() {
    const {themeToggler,theme} = useTheme()
  return (
     <Button
      variant="default"
      size="icon"
      onClick={themeToggler}
      className="rounded-full h-14 w-14 fixed bottom-10 right-10 z-50 "
    >
    {theme === "light" ? (
        <Sun className="" />
      ) : (
        <Moon
         className="" />
      )}
    </Button>
  )
}

export default ToggleTheme