
"use client"

import { SignUp } from "@clerk/nextjs"
const page = () => {
  return (
    <div className="flex items-center justify-center mt-4">
        <div className="">

        <SignUp/>
        </div>
    </div>
  )
}

export default page