"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Forzar el fondo rojizo oscuro
    document.body.style.backgroundColor = "#0a0000";
    document.body.style.background = "radial-gradient(circle at center, #200000, #100000, #000000)";
    document.documentElement.style.backgroundColor = "#0a0000";
    document.documentElement.style.background = "radial-gradient(circle at center, #200000, #100000, #000000)";
  }, []);

  return <>{children}</>;
} 