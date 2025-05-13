import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: '#FF8333',         // CTAs, highlights
        primaryHover: '#ff7519',    // CTA hover
        dark: '#1A1A1A',            // Deep black text
        primary_bg: '#f9f9f9',       // Background sections
        divider: '#e0e0e0',         // Dividers, outlines
        text_primary: '#333333',        // Base paragraph text
        text_secondary: '#6B7280',           // Secondary text (gray-600)
        text_white: '#FFFFFF',           // White (default)
        accentBlue: '#007BFF',      // Link / hover
        warning: '#FBBF24',         // Icons / highlights
        notification_dark: '#1e293b',        // Footer or strong sections
        notification: '#EBF4FF',        // Notification / info backgrounds
      }
    }
  }
};

export default config;
