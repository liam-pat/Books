import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis';


// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// https://shiki.style/themes
			theme: 'dracula',
			themes: {
				light: 'dracula',
				dark: 'dracula',
			  },
			defaultColor: false,
			wrap: false,
		},
		// add the emoji to span tag
    	rehypePlugins: [rehypeAccessibleEmojis],
	}
});
