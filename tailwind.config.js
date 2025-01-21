/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import tailwindcssAnimate from 'tailwindcss-animate';

export default defineConfig({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [tailwindcssAnimate],
});

