// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkDirective from 'remark-directive';
import remarkEmbeds from './src/plugins/remark-canva-embed.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'KPVZ FHS Kurzy',
      customCss: ['./src/styles/custom.css'],
      logo: {
        light: './src/assets/brand/logo-icon-black.svg',
        dark: './src/assets/brand/logo-icon-paper.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      locales: {
        root: {
          label: 'Česky',
          lang: 'cs',
        },
      },
      social: [{ icon: 'seti:html', label: 'web', href: 'https://kpvz.cyberspacelab.cz' }],
      sidebar: [
        { label: 'Odevzdávání projektu', link: '/odevzdani-projektu/' },
        {
          label: 'Bakalářský diplomní seminář',
          autogenerate: { directory: 'diploma-seminar-bachelor' },
        },
        {
          label: 'Techniky experimentální psychologie - PsychoPy',
          autogenerate: { directory: 'experimental-techniques' },
        },
        {
          label: 'Specifické přístupy zpracování dat v psychologii',
          autogenerate: { directory: 'specific-data-processing-approaches' },
        },
        {
          label: 'Úvod do environmentální psychologie',
          autogenerate: { directory: 'environmental-psychology' },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkDirective, remarkEmbeds],
  },
});
