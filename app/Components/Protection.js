'use client'
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { checkUser } from "../helper";

export default function Protection(){
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split('/');
    const role = segments[1];
    
    useEffect(() => {
        if(!session || !session?.user) return;
        async function auth(){
        const res = await checkUser(session?.user?.email);
        if(res.error || res.message === "Doesn't exist"){
            if(role !== "Registeration"){
               await signOut();
               router.push('/Registeration');
            }
        }
        else if(res.isAdmin){
            if(role === "admin"){
                return;
            }
            router.push('/admin');
        }
        else if(role === "admin"){
            router.push('/');
        }
        }
        auth();
    }, [session]);
    return (
        <></>
    )
}