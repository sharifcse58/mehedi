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
        allowedHosts: [
            "5174-sharifcse58-mehedi-pr838yd9g3f.ws-us117.gitpod.io"
        ],
        host: true, // Allows access via network
        port: 5173, // Default Vite port
    },
});
