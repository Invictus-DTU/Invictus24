"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSearchParams, useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "./Components/SessionProvider";
import Protection from "./Components/Protection";
import { Suspense } from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider>
                    <Protection />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Navbar />
                    </Suspense>
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
