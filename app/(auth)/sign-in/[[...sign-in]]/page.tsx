"use client"

import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="flex items-center justify-center mt-24">
        <SignIn/>
    </div>
  )
}

export default page