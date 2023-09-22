'use client';

import './globals.css'
import React, { useState, useEffect } from "react";
import { AuthProvider } from "src/app/FirebaseContext.js";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="pageContent">{children}</body>
      </AuthProvider>
    </html>
  )
}
