import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: 'fallback',
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Dev Barber - Barbearia & Bar",
  description: "Dev Barber desenvolvido por A F RODRIGUES DESENVOLVIMENTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
