const resolveAssetUrl = (projectSlug, media) => {
  if (!media) {
    return '';
  }
  const src = typeof media === 'string' ? media : media.src;
  const assetRoot =
    typeof media === 'object' && media.assetRoot ? media.assetRoot : projectSlug;

  return require(`@/assets/${assetRoot}/${src}`);
};

const isMediaType = (media, type) => media && media.type === type;

export { resolveAssetUrl, isMediaType };
