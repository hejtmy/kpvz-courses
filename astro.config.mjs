// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'KPVZ FHS Kurzy',
      locales: {
        root: {
          label: 'Česky',
          lang: 'cs',
        },
      },
      social: [{ icon: 'seti:html', label: 'web', href: 'https://kpvz.cyberspacelab.cz' }],
      sidebar: [
        {
          label: 'Bakalářský diplomní seminář',
          autogenerate: { directory: 'diploma-seminar-bachelor' },
        },
        {
          label: 'Techniky experimentální psychologie - PsychoPy',
          autogenerate: { directory: 'experimental-techniques' },
        },
      ],
    }),
  ],
});
