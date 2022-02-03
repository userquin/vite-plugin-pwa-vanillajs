import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import replace from "@rollup/plugin-replace";

export default defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        VitePWA({
            mode: 'development',
            base: '/',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'PWA VanillaJS',
                short_name: 'PWA VanillaJS',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        replace({ __DATE__: new Date().toISOString() })
    ]
})
