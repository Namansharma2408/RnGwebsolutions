"use client"
import React from 'react'
import { ThemeToggle } from '@/components'
import Image from "next/image";
const page = () => {
  return (
    <div className='bg-background '>
      page
      <ThemeToggle initialValue={'dark'} />
      RnG website
      <div className='w-40 h-40'>
      <Image src="/logoLight.png" alt="Picture of the log" width={500} height={500} />
      </div>
    </div>


  )
}

export default page