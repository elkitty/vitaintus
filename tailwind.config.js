/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-aileron)", "system-ui", "sans-serif"],
          display: ["var(--font-swear)", "serif"],
          aileron: ["var(--font-aileron)"],
          
          
        },
      },
    },
  };
  