import React from 'react'

const page = () => {
    console.log("my env:",process.env.NEXT_PUBLIC_MY_ID)

  return (
    <div>ENV variable</div>
  )
}

export default page