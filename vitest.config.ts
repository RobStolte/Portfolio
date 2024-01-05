import vue from '@vitejs/plugin-vue'
import { getViteConfig } from 'astro/config';

export default getViteConfig({
    plugins: [
        vue()
    ],
    test: {
        globals: true,
    },
});