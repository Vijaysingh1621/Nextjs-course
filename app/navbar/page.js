"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router=(page)=>{
        router.push(page);
    }
  return (
    <nav>
      <ul>
        <div className='logo'>
            <h1 className='text-3xl'>Logo</h1>
        </div>

        <div className='link-container'>
            <Link className='link' href="../navbar/about">
            about</Link>
            <Link className='link' href="../navbar/portfolio">
            portfolio</Link>
            <Link className='link' href="../navbar/contact">
            contact</Link>
            
        </div>
      </ul>
    </nav>
  )
}

export default Navbar