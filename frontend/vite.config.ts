import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
    mode: "production",
    base: "/",
    manifest: {
        name: "北商大資訊系統 PWA",
        theme_color: "#ffffff",
        icons: [
            {
                src: "logo-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "logo-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "logo-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
    },
    devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: "esnext",
    },
    plugins: [
        VitePWA(pwaOptions),
        react(),
        federation({
            name: "app",
            remotes: {
                remoteA: "http://localhost:4173/assets/remoteEntry.js",
            },
            shared: ["react", "react-dom"],
        }),
    ],
});
