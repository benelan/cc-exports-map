import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow:["calcite-components"] // only required when using `npm link`
		}
	}
};

export default config;
