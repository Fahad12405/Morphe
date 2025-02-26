import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmallNavbar from "@/components/SmallNav/smallNav";
import Footer from "@/components/Footer/footer";
import ProgressBar from "@components/Loader/ProgressBar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        cz-shortcut-listen="true"
      >
         <ProgressBar />
        <Navbar />
        <SmallNavbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
