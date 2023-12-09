import './globals.css'
import React from "react";
import { AuthProvider } from "../lib/FirebaseContext.js";

export const metadata = {
  title: 'ChatGPTuring'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#222529"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="pageContent">{children}</body>
      </AuthProvider>
    </html>
  )
}

