"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const PageToTop = () => {
    const location = usePathname();

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    },[location])
  return null
}

export default PageToTop
