# Austin Branham Portfolio

Portfolio site built with Vue 3 + Vite. Content is data-driven so projects are easy to add and edit.

## Quick start
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Preview production build
```
npm run preview
```

## Content editing

### Projects and pages
All project content lives in `src/data/projects.js`. Each project has:
- `slug`: route and asset folder name.
- `category`: `design`, `code`, or `motion`.
- `title`, `description`, `date`, `overview`, `tasks`, `roles`.
- `hero`: primary project video (used on the project page header).
- `preview`: hover/preview video (used on the project listing page).
- `clientLogo`: logo asset object.
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
  media: { type: 'video', src: 'project.mp4', assetRoot: 'projects/project' }
}
```

### Assets
Media is served from Cloudflare R2 + CDN (not bundled into the Vue app).

Set the media domain + Cloudflare Image Resizing pattern in:
- `src/js/utils/media.js`
  - `MEDIA_BASE` (set via `VITE_MEDIA_BASE`)
  - `CF_IMAGE_PATH` (set via `VITE_CF_IMAGE_PATH`)

Example `.env.production`:
```
VITE_MEDIA_BASE=https://media.yourdomain.com
VITE_CF_IMAGE_PATH=/cdn-cgi/image/
VITE_SITE_URL=https://yourdomain.com/
```

Paths in `projects.js` are relative to `MEDIA_BASE`. Example:
```
tgrsite/tgrsite-film-desktop.webp
```

### Asset objects
Assets are simple objects:
```
{
  type: 'image' | 'video',
  src: 'slug/file.mp4',
  assetRoot: 'slug', // optional helper
  aspect: 16 / 9, // optional, avoids layout shift
  sizes: '(min-width: 1200px) 60vw, 90vw'
}
```

Helpers in `src/data/projects.js` keep assets consistent:
- `projectImage(...)`, `projectVideo(...)`, `projectHero(...)`, `projectPreview(...)`
- `logoAsset(...)`

### Global media
Global background videos + fallback images live in `src/data/siteMedia.js`.

### Asset component
`src/components/Asset.vue` handles:
- Responsive images with Cloudflare Image Resizing (`srcset` + `sizes`).
- Lazy loading for images.
- Video lazy-loading with IntersectionObserver (sources are attached only when visible).
- Videos auto-pause when out of view, and show the first frame without posters.

### Demo
A demo route shows how to render a hero + gallery using `Asset`:
- `src/components/ProjectGalleryDemo.vue`
- Route: `/demo/gallery`

## R2 upload (rclone)
Install rclone:
```
brew install rclone
```

Folder structure in your R2 bucket should match:
```
<project-slug>/<file>
logos/<logo-file>
video/<site-video>
general/<fallback-image>
```

For convenience, use your existing `src/assets/` folder as the staging source for R2 uploads.

Use the helper script (no secrets stored in repo):
```
R2_ACCOUNT_ID=xxxx \
R2_ACCESS_KEY_ID=xxxx \
R2_SECRET_ACCESS_KEY=xxxx \
R2_BUCKET=portfolio-media \
./scripts/rclone-upload.sh /path/to/your/assets
```

Or sync the default local `src/assets/` folder:
```
R2_ACCOUNT_ID=xxxx \
R2_ACCESS_KEY_ID=xxxx \
R2_SECRET_ACCESS_KEY=xxxx \
R2_BUCKET=portfolio-media \
./scripts/rclone-upload.sh
```

### Store R2 creds locally
For convenience, you can add a local `.env.r2` file (gitignored):
```
R2_ACCOUNT_ID=xxxx
R2_ACCESS_KEY_ID=xxxx
R2_SECRET_ACCESS_KEY=xxxx
R2_BUCKET=portfolio
```

Then just run:
```
./scripts/rclone-upload.sh
```

### Sync media + commit + push
Single command to sync `src/assets` to R2 and push code:
```
./scripts/sync-and-push.sh
```

### One-command deploy (media + build)
```
R2_ACCOUNT_ID=xxxx \
R2_ACCESS_KEY_ID=xxxx \
R2_SECRET_ACCESS_KEY=xxxx \
R2_BUCKET=portfolio-media \
./scripts/deploy-all.sh
```

Optional flags:
```
RCLONE_EXTRA_FLAGS="--dry-run" ./scripts/rclone-upload.sh /path/to/your/media
```

If your endpoint is custom, override it:
```
R2_ENDPOINT=https://<accountid>.r2.cloudflarestorage.com \
./scripts/rclone-upload.sh /path/to/your/media
```

Once uploaded, verify with:
```
https://media.yourdomain.com/tgrsite/tgrsite-tv-desktop.mp4
https://media.yourdomain.com/cdn-cgi/image/width=1200,quality=85,format=auto/farout/far-out-poster.jpg
```

## SEO
SEO metadata lives in `index.html`.
- Update the title/description to match your current focus.
- Replace the social preview image at `public/img/og-image.jpg`.
- Set `VITE_SITE_URL` in `.env.production` (include trailing slash) for canonical/OG URLs.

For local development, set `VITE_SITE_URL` in `.env` (for example `http://localhost:5173/`).

## Notes
Build output goes to `public_html/` based on `vite.config.js`.
Global styles are bundled via `src/scss/main.scss`.
