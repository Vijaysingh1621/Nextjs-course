"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const home = () => {
  const router=useRouter();

  const navigate=(page)=>{
    router.push(`navbar/${page}`);
  }
  return (
    <section>
      <div className='text-3xl'>Home</div>
      <div className='container-btn'>
      <button onClick={()=>navigate("about")}>Go to about page</button>
      <button onClick={()=>navigate("portfolio")}>Go to portfolio page</button>
      <button onClick={()=>navigate("contact")}>Go to contact page</button>
      </div>
     
    </section>
    

  )
}

export default home