"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Forzar fondo 100% negro sin efectos
    document.body.style.backgroundColor = "#000000";
    document.body.style.background = "#000000";
    document.documentElement.style.backgroundColor = "#000000";
    document.documentElement.style.background = "#000000";
    
    // Asegurarse de que no haya transiciones, animaciones ni fondos con color
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        transition: none !important;
        animation: none !important;
      }
      html, body, #__next, [class*="page"] {
        background: #000000 !important;
        background-color: #000000 !important;
        background-image: none !important;
      }
      body::before, body::after, html::before, html::after, 
      div::before, div::after {
        display: none !important;
      }
      .container, .title, .subtitle, h1, h2, h3, h4, h5, h6, p, span {
        background: transparent !important;
        background-color: transparent !important;
      }
      /* Excepción para el botón con fondo rojo */
      .button {
        background: #cc0000 !important;
        background-color: #cc0000 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
} 