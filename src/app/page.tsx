"use client";

import styles from "./page.module.css";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Forzar el fondo oscuro rojizo
    document.body.style.backgroundColor = "#0a0000";
    document.body.style.background = "radial-gradient(circle at center, #200000, #100000, #000000)";
    document.documentElement.style.backgroundColor = "#0a0000";
    document.documentElement.style.background = "radial-gradient(circle at center, #200000, #100000, #000000)";
    
    // Eliminar cualquier fondo azul que pueda estar persistiendo
    const style = document.createElement('style');
    style.innerHTML = `
      html, body, #__next, .${styles.page} {
        background: radial-gradient(circle at center, #200000, #100000, #000000) !important;
        background-color: #0a0000 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Mostrar el título con animación después de un breve retraso
    const titleTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Mostrar el subtítulo después del título
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 800);
    
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      document.head.removeChild(style);
    };
  }, []);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    
    // Seleccionar el iframe y recargar con el nuevo estado de mute
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const currentSrc = iframe.src;
      if (isMuted) {
        // Quitar mute
        iframe.src = currentSrc.replace('&mute=1', '');
      } else {
        // Añadir mute
        if (!currentSrc.includes('mute=1')) {
          iframe.src = currentSrc + '&mute=1';
        }
      }
    }
  };

  return (
    <div className={styles.page} style={{ backgroundColor: "#0a0000", background: "radial-gradient(circle at center, #200000, #100000, #000000)" }}>
      <div className={styles.smokeContainer}>
        <div className={styles.smokeLayer}></div>
        <div className={styles.smokeLayer} style={{ animationDelay: "-5s" }}></div>
        <div className={styles.smokeLayer} style={{ animationDelay: "-10s" }}></div>
        <div className={styles.smokeLayer} style={{ animationDelay: "-15s" }}></div>
      </div>
      
      <div className={styles.floatingParticles}>
        <div className={styles.particle} style={{ top: '5%', left: '10%' }}></div>
        <div className={styles.particle} style={{ top: '15%', left: '30%' }}></div>
        <div className={styles.particle} style={{ top: '25%', left: '80%' }}></div>
        <div className={styles.particle} style={{ top: '40%', left: '15%' }}></div>
        <div className={styles.particle} style={{ top: '55%', left: '70%' }}></div>
        <div className={styles.particle} style={{ top: '65%', left: '40%' }}></div>
        <div className={styles.particle} style={{ top: '75%', left: '85%' }}></div>
        <div className={styles.particle} style={{ top: '85%', left: '25%' }}></div>
        <div className={styles.particle} style={{ top: '10%', left: '60%' }}></div>
        <div className={styles.particle} style={{ top: '30%', left: '45%' }}></div>
        <div className={styles.particle} style={{ top: '50%', left: '90%' }}></div>
        <div className={styles.particle} style={{ top: '70%', left: '20%' }}></div>
        <div className={styles.particle} style={{ top: '80%', left: '50%' }}></div>
        <div className={styles.particle} style={{ top: '20%', left: '70%' }}></div>
        <div className={styles.particle} style={{ top: '60%', left: '5%' }}></div>
      </div>
      
      <div className={styles.container}>
        <h1 className={`${styles.title} ${isLoaded ? styles.titleVisible : ''}`}>Nequi Alpha</h1>
        
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoFrame}
            src={`https://www.youtube.com/embed/2QGoQmaOdsA?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=2QGoQmaOdsA${isMuted ? '&mute=1' : ''}`}
            title="Demostración Nequi Alpha"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.phoneNotch}></div>
          <div className={styles.phoneButton}></div>
          <button 
            className={styles.soundToggle} 
            onClick={toggleSound}
            aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
          >
            {isMuted ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 14.5H2C1.45 14.5 1 14.05 1 13.5V10.5C1 9.95 1.45 9.5 2 9.5H5.5L10.29 4.71C10.92 4.08 12 4.52 12 5.41V18.58C12 19.48 10.92 19.92 10.29 19.29L5.5 14.5Z" fill="white"/>
                <path d="M22 9.85C22.3 10.12 22.45 10.5 22.45 10.9C22.45 11.29 22.33 11.68 22 11.93C21.67 12.18 21.28 12.18 20.9 12.18C20.53 12.18 20.15 12.04 19.82 11.78C19.5 11.5 19.34 11.14 19.34 10.74C19.34 10.35 19.46 9.96 19.8 9.7C20.13 9.44 20.5 9.43 20.9 9.43C21.27 9.43 21.66 9.56 22 9.85Z" fill="white"/>
                <path d="M14.45 7.82C14.74 8.19 14.72 8.67 14.7 9.16C14.66 9.61 14.34 10.03 13.9 10.19C13.69 10.26 13.47 10.29 13.26 10.25C12.98 10.2 12.72 10.1 12.5 9.95C12.24 9.77 12.05 9.51 12.02 9.19C11.98 8.89 12.03 8.58 12.19 8.32C12.33 8.09 12.55 7.91 12.82 7.83C13.16 7.73 13.52 7.73 13.88 7.84C14.11 7.91 14.31 8.03 14.45 7.82Z" fill="white"/>
                <path d="M16.66 4.73C16.97 5.07 16.96 5.55 16.95 6.05C16.93 6.74 16.44 7.32 15.75 7.43C15.28 7.5 14.8 7.38 14.42 7.1C14.07 6.83 13.83 6.41 13.79 5.95C13.75 5.53 13.83 5.09 14.09 4.75C14.43 4.3 14.96 4.03 15.5 4C15.91 3.97 16.33 4.1 16.66 4.73Z" fill="white"/>
                <path d="M17.74 2.11C18.05 2.45 18.04 2.94 18.03 3.43C18.01 4.12 17.52 4.7 16.83 4.81C16.36 4.88 15.88 4.76 15.5 4.48C15.15 4.21 14.91 3.79 14.87 3.33C14.83 2.91 14.91 2.47 15.17 2.13C15.51 1.68 16.04 1.41 16.58 1.38C16.99 1.35 17.41 1.48 17.74 2.11Z" fill="white"/>
                <line x1="2" y1="22" x2="22" y2="2" stroke="white" strokeWidth="2"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 14.5H2C1.45 14.5 1 14.05 1 13.5V10.5C1 9.95 1.45 9.5 2 9.5H5.5L10.29 4.71C10.92 4.08 12 4.52 12 5.41V18.58C12 19.48 10.92 19.92 10.29 19.29L5.5 14.5Z" fill="white"/>
                <path d="M22 9.85C22.3 10.12 22.45 10.5 22.45 10.9C22.45 11.29 22.33 11.68 22 11.93C21.67 12.18 21.28 12.18 20.9 12.18C20.53 12.18 20.15 12.04 19.82 11.78C19.5 11.5 19.34 11.14 19.34 10.74C19.34 10.35 19.46 9.96 19.8 9.7C20.13 9.44 20.5 9.43 20.9 9.43C21.27 9.43 21.66 9.56 22 9.85Z" fill="white"/>
                <path d="M14.5 8C14.78 8.38 14.78 8.84 14.77 9.31C14.74 9.73 14.44 10.12 14.03 10.28C13.83 10.34 13.62 10.36 13.42 10.31C13.15 10.26 12.91 10.15 12.7 10C12.45 9.81 12.27 9.53 12.23 9.23C12.2 8.92 12.25 8.6 12.4 8.33C12.53 8.1 12.74 7.9 13 7.81C13.31 7.72 13.65 7.71 13.98 7.81C14.21 7.89 14.39 8.01 14.5 8Z" fill="white"/>
                <path d="M16.5 5C16.79 5.38 16.79 5.85 16.77 6.33C16.75 6.98 16.29 7.55 15.64 7.64C15.2 7.7 14.76 7.57 14.39 7.29C14.06 7.03 13.84 6.64 13.8 6.21C13.76 5.82 13.84 5.42 14.08 5.09C14.4 4.67 14.9 4.41 15.41 4.38C15.78 4.36 16.18 4.48 16.5 5Z" fill="white"/>
                <path d="M18.5 2C18.79 2.38 18.79 2.85 18.77 3.33C18.75 3.98 18.29 4.55 17.64 4.64C17.2 4.7 16.76 4.57 16.39 4.29C16.06 4.03 15.84 3.64 15.8 3.21C15.76 2.82 15.84 2.42 16.08 2.09C16.4 1.67 16.9 1.41 17.41 1.38C17.78 1.36 18.18 1.48 18.5 2Z" fill="white"/>
              </svg>
            )}
          </button>
        </div>
        
        <p className={`${styles.subtitle} ${showSubtitle ? styles.subtitleVisible : ''}`}>
          La mejor app que imita a Nequi para realizar pagos falsos a negocios o personas
        </p>
        <a href="https://t.me/Nequi_Alpha" className={styles.button} target="_blank" rel="noopener noreferrer">
          <svg 
            className={styles.telegramIcon} 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M22.2857 2.42846L1.7143 10.8483C0.571405 11.3768 0.580698 12.1894 1.50963 12.5069L6.70205 14.0457L8.89284 20.2414C9.40562 21.612 10.5617 21.7016 11.2949 20.5769L14.1 17.0001L19.5429 20.9063C20.6903 21.5723 21.5057 21.2198 21.8023 19.8542L24.9429 4.21422C25.3697 2.4757 24.3143 1.72137 22.2857 2.42846ZM20.1429 6.14277L11.0143 14.4857C10.8429 14.6428 10.6714 14.9571 10.6571 15.1714L10.4286 17.5714C10.4 17.9428 10.1143 17.9571 10.0286 17.6143L8.77141 13.5428C8.6 12.9714 8.81427 12.6143 9.41427 12.2571L19.9286 5.87134C20.3571 5.59991 20.7571 5.74277 20.4429 6.14277H20.1429Z" 
              fill="currentColor"
            />
          </svg>
          Unirse a Telegram
        </a>
      </div>
    </div>
  );
}