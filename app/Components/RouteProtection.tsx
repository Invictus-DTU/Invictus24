'use client'
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { checkUser } from "../helper";

export default function ProtectedRoute() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session || !session.user) {
      return null; 
    }
    const auth = async () => {
      let res = await checkUser(session.user.email);
      if (res.error || res.message === "Doesn't exist") {
        await signOut();
      }
    };

    auth();
  }, [session]);  // Add session to the dependency array
  return(
    <></>
  )
}
