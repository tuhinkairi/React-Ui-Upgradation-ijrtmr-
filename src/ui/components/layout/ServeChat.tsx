import { useEffect } from 'react';

// Define Tawk API interface
interface TawkAPI {
  onLoad?: () => void;
  onStatusChange?: (status: string) => void;
  visitor?: Record<string, unknown>;
  setAttributes?: (attributes: Record<string, unknown>, callback?: () => void) => void;
  addEvent?: (event: string, metadata?: Record<string, unknown>, callback?: () => void) => void;
  removeEvent?: (event: string) => void;
  toggleVisibility?: (callback?: () => void) => void;
  popup?: {
    toggle: () => void;
    maximize: () => void;
    minimize: () => void;
    hide: () => void;
    show: () => void;
  };
  showWidget?: () => void;
  hideWidget?: () => void;
  maximize?: () => void;
  minimize?: () => void;
  toggle?: () => void;
  endChat?: () => void;
}

// Extend the Window interface to include Tawk properties
declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
  }
}

export default function ServeChat() {
  useEffect(() => {
    if (window.Tawk_API) return; // Prevent multiple script injections

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    s1.src = 'https://embed.tawk.to/66a871d032dca6db2cb74c0c/1i40vp6dj';
    s1.async = true;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    const s0 = document.getElementsByTagName('script')[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null; // No visible JSX
}