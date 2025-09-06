"use client"
import React from 'react'
import { ThemeToggle } from '@/components'
import Image from "next/image";
import { useTheme } from '@/hooks';
import { ThemeProvider } from '@/contexts/ThemeContext';
const page = () => {
  const theme = useTheme();
  console.log("Current theme:", theme);
  return (
    <ThemeProvider>
      <div className='bg-background '>
        
        
        
      </div>
    </ThemeProvider>


  )
}

export default page