"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "./Components/SessionProvider";
import Protection from "./Components/Protection";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {Analytics} from '@vercel/analytics/react'
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <title>Invictus DTU</title>
      <meta
        name="description"
        content="india Largest Annual TechFest, Delhi Technological University 2024"
      />
      <link rel="icon" type="image/x-icon" href="static/favicon.ico"></link>
      <body className={inter.className}>
        <SessionProvider>
          <Protection />
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <SpeedInsights />
          {children}
          <Footer />
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
