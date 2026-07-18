import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				// Lets components `@use "style" as *` from any depth
				loadPaths: ['src']
			}
		}
	}
});
