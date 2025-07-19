import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adeniran Quwam - Frontend Developer",
  description: 
  "Expert Frontend Developer in Nigeria specializing in React, Next.js, and crafting user-friendly, modern web applications.",
openGraph: {
    title: "Quwam Adeniran",
    description:   "Expert Frontend Developer in Nigeria specializing in React, Next.js, and crafting user-friendly, modern web applications.",
    url: "https://quwamportfolio.netlify.app",
    siteName: "Quwam Adeniran",
    images: [
      {
        url: "https://quwamportfolio.netlify.app/quwam.jpeg", 
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  verification: {
    google: 'arRF-HuOQMxY7TDg-ekXNyeKPfT7M2C635-cBCwVczM',
  },
   twitter: {
    card: "summary_large_image",
    title: "Quwam Adeniran",
    description: "Frontend Developer portfolio",
    images: ["https://quwamportfolio.netlify.app/quwam.jpeg"],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
