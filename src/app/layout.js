import './globals.css'
import React from "react";
import { AuthProvider } from "src/app/FirebaseContext.js";
import { Metadata } from 'next';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPTuring',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#222529",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="pageContent">{children}</body>
      </AuthProvider>
    </html>
  )
}
