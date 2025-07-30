import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is important!
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss(),react()],
}