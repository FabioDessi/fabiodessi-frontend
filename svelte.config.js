import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

export default {
  preprocess: vitePreprocess(),

	kit: {
    alias: {
      $types: 'src/types.ts',
      '$app.css': 'src/app.css',
      $utils: 'src/utils',
      $components: 'src/components',
      $icons: 'src/icons'
    },
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};
