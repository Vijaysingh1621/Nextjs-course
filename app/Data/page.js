"use client"
import { Button } from 'antd'
import React from 'react'

const page = () => {

    const fetchData= async()=>{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        data= await data.json();
        console.log(data);
    }

  return (
    <div className='flex-col gap-2 '>
        data
    <Button className='flex mr-2 text-black text-[20px]  h-auto w-auto' onClick={()=>fetchData()}> fetch data</Button>
    </div>
  )
}

export default page
