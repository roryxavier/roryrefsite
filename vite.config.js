import { fileURLToPath, URL } from 'node:url';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import("vite").UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
};

export default config;
