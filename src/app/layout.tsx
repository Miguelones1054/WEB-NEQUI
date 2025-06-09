import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";  

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nequi Alpha",
  description: "La mejor app que imita a Nequi para realizar pagos falsos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ backgroundColor: "#000000", background: "#000000" }}>
      <body 
        className={`${orbitron.variable} ${rajdhani.variable}`}
        style={{ 
          backgroundColor: "#000000",
          background: "#000000"
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
