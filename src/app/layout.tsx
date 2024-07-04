import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"],weight: ["400"], });

export const metadata: Metadata = {
  title: "Prueba Tecnica - Julian Magallanes",
  description: "Prueba Tecnica de Julian Magallanes para security and system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
          {children}
        <Footer /> 
      </body>
    </html>
  );
}
