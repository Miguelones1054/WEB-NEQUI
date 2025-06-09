/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  // Deshabilitar el botón de Next.js en modo desarrollo
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // Deshabilitar el badge de Next.js
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  crossOrigin: 'anonymous',
};

module.exports = nextConfig; 