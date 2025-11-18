// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KPVZ FHS Kurzy',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Úvod do psychologie',
          autogenerate: { directory: 'introduction-to-psychology' },
				},
				{
					label: 'Bakalářský diplomní seminář',
					autogenerate: { directory: 'diploma-seminar-bachelor' },
				},
			],
		}),
	],
});
