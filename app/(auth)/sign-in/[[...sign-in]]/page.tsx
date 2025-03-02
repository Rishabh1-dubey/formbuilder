 "use client"
 import { SignIn, useUser } from "@clerk/nextjs"
const Page = () => {


  const {user} = useUser()
  if (!user) {
    return (
      <div className="flex items-center justify-center mt-24">
        <SignIn />
      </div>
    );
  };

}
export default Page