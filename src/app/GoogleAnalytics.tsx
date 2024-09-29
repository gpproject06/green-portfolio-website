"use client"; // This tells Next.js to treat this file as a Client Component

import { useEffect } from 'react';

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-BJK8MLB3TH`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the Google Analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-BJK8MLB3TH');
  }, []); 

  return null; 
};

export default GoogleAnalytics;
