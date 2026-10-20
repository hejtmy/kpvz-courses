# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Astro-based course website** for KPVZ (Katedra psychologie a věd o životě) at FHS UK. The site uses **Starlight**, a documentation theme for Astro, to provide course materials and resources for psychology courses taught by Lukáš Hejtmánek.

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Content Management

- **Content Location**: All course content is in `src/content/docs/`
- **File Format**: Content uses `.md` or `.mdx` files with frontmatter
- **Routing**: File-based routing - file paths become URLs automatically
- **Content Schema**: Defined via Starlight's `docsSchema` in [src/content.config.ts](src/content.config.ts)

### Course Structure

Courses are organized as subdirectories under `src/content/docs/`:
- Each course has an `index.md` as landing page
- Course content is nested in subdirectories (e.g., `week1/`, `week2/`)
- Courses appear in the main page via the `CourseBanner` component

### Sidebar Configuration

The site sidebar is auto-generated from the directory structure via the `autogenerate` feature in [astro.config.mjs](astro.config.mjs):

```javascript
sidebar: [
  {
    label: 'Bakalářský diplomní seminář',
    autogenerate: { directory: 'diploma-seminar-bachelor' },
  },
]
```

To add a new course to the sidebar, add a new entry to the `sidebar` array.

### Components

Custom Astro components live in `src/components/`:

- **CourseBanner**: Displays course cards on the homepage with links to materials and Moodle
  - Props: `title`, `icon`, `text`, `materialsHref`, `moodleHref`
  - Used in `index.mdx` with Starlight's CardGrid

### Assets

- **Images**: Store in `src/assets/` and reference with relative paths in markdown
- **Course-specific assets**: Organized in `src/assets/courses/[course-name]/`
- **Static files**: Place in `public/` directory (served at root)

## Site Configuration

Key settings in [astro.config.mjs](astro.config.mjs):
- **Title**: "KPVZ FHS Kurzy"
- **Locale**: Czech (`cs`)
- **Social link**: Points to https://kpvz.cyberspacelab.cz

## Content Frontmatter

Standard frontmatter fields for course pages:
```yaml
---
title: Page Title
description: Page description
---
```

Lesson presentations are set in frontmatter (not in the body). The `remark-presentation` plugin ([src/plugins/remark-presentation.mjs](src/plugins/remark-presentation.mjs)) renders a `## Presentace` section where the body contains a `:::presentation` block (`:::\n:::`), or before the first `##` heading when there is no block; pages without `presentation` render nothing (the block is removed):
```yaml
presentation:
  type: canva            # embedded via iframe; `?embed` is added automatically
  src: https://www.canva.com/design/.../view
# or
presentation:
  type: pdf              # file in public/, path without the `/public` prefix
  src: /courses-files/<course>/<file>.pdf
```

Homepage uses special `splash` template with hero section.

## Development Notes

- The site uses **Czech language** - all content and UI should be in Czech
- Official course content remains on Moodle; this site provides supplementary public materials
- When adding courses, update both `src/content/docs/` and the sidebar in `astro.config.mjs`
