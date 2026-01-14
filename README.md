# Austin Branham Portfolio

Portfolio site built with Vue 2. Content is data-driven so projects are easy to add and edit.

## Quick start
```
npm install
npm run serve
```

## Build
```
npm run build
```

## Content editing

### Projects and pages
All project content lives in `src/data/projects.js`. Each project has:
- `slug`: route and asset folder name.
- `category`: `design`, `code`, or `motion`.
- `title`, `description`, `date`, `overview`, `tasks`, `roles`.
- `blocks`: array that defines the page layout.

### Blocks
Blocks are rendered dynamically by `src/components/projectBlock.vue`. Each block has a `type` that maps to a component in `src/components/blocks/`.

Available block types:
- `video`: single video.
- `image`: single image.
- `split`: two-column media (desktop + mobile).
- `toggle`: swaps between video and image.
- `embed`: external video (YouTube/Vimeo).
- `quote`: pull quote.
- `text`: text-only section.
- `gallery`: image grid.

Example block:
```
{
  type: 'video',
  title: 'Home Page',
  description: 'Short summary.',
  media: { type: 'video', src: 'project.mp4' }
}
```

### Assets
Project assets live in `src/assets/<project-slug>/`.
Client logos live in `src/assets/logos/`.

## SEO
SEO metadata lives in `public/index.html`.
- Update the title/description to match your current focus.
- Replace the social preview image at `public/img/og-image.jpg`.
- Set `VUE_APP_SITE_URL` in `.env.production` (include trailing slash) for canonical/OG URLs.

## Notes
Build output goes to `public_html/` based on `vue.config.js`.
Global styles are bundled via `src/scss/main.scss`.
