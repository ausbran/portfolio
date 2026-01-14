const videoAsset = (src, options = {}) => ({
  type: 'video',
  assetRoot: 'video',
  src,
  autoplay: true,
  muted: true,
  playsinline: true,
  ...options
});

const imageAsset = (src, options = {}) => ({
  type: 'image',
  assetRoot: 'general',
  src,
  ...options
});

const siteVideos = {
  home: videoAsset('home.mp4', { loop: true }),
  design: videoAsset('design.mp4', { loop: false }),
  code: videoAsset('code.mp4', { loop: false }),
  motion: videoAsset('motion.mp4', { loop: false }),
  about: videoAsset('about.mp4', { loop: true })
};

const fallbackImages = {
  design: imageAsset('design-fallback.jpg', {
    alt: 'Design background',
    sizes: '100vw'
  }),
  code: imageAsset('code-fallback.jpg', {
    alt: 'Code background',
    sizes: '100vw'
  }),
  motion: imageAsset('motion-fallback.jpg', {
    alt: 'Motion background',
    sizes: '100vw'
  })
};

export { siteVideos, fallbackImages };
