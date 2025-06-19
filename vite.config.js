import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { withZephyr } from 'vite-plugin-zephyr';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        withZephyr(),
        federation({
            name: 'host_app',
            remotes: {
                remoteApp: 'https://gustavo-pereira-14-module-federation-remote-modul-04682e89d-ze.zephyrcloud.app/assets/remoteEntry.js',
                //remoteApp: 'http://localhost:4173/assets/remoteEntry.js'
            }
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodesplit: false
    }
})
