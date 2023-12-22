 'use client'
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

async function fetchData(session) {
  try {
    const result = await fetch(`http://localhost:3000/api/checkUser/${session?.user?.email}`, { method: "GET" });
    console.log("verified");
    const res = await result.json();
    return res.valid;
  } catch (err) {
    console.error("Cannot authenticate:", err);
    return false;
  }
}

export default function ProtectedRoute() {
  const { data: session } = useSession();
  const router = useRouter()

  if (!session || !session?.user) {
    router.push("api/auth/signin");
  }

  useEffect(() => {
    const auth = async () => {
      let isValid = true;
      isValid = await fetchData(session);
      
      if (!isValid) {
        router.push("protected");
      }
    };

    auth();
  }, [session]);

  return (
    <div> This is a protected Route </div>
  );
}
