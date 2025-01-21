import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true, // Use polling if HMR isn't working
        },
        hmr: {
            overlay: true, // Display errors as an overlay in the browser
        },
    },
});
