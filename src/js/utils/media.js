const ENV =
  (typeof import.meta !== "undefined" && import.meta.env) ||
  (typeof process !== "undefined" && process.env) ||
  {};

// Media domain (Cloudflare CDN / R2 custom domain).
const MEDIA_BASE =
  ENV.VITE_MEDIA_BASE ||
  ENV.VUE_APP_MEDIA_BASE ||
  "https://media.austinbranham.com";

const DEFAULT_IMAGE_QUALITY = 85;
const DEFAULT_IMAGE_FORMAT = "auto";
const DEFAULT_SRCSET_WIDTHS = [320, 640, 960, 1280, 1600, 1920, 2560];

const isAbsoluteUrl = (url) => /^https?:\/\//i.test(url || "");

const normalizePath = (path) => (path || "").replace(/^\/+/, "");

const normalizeCdnPath = (path) => {
  const normalized = `/${path || ""}`.replace(/\/+/g, "/");
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
};

// Cloudflare Image Resizing lives at /cdn-cgi/image/ on the same zone.
const CF_IMAGE_PATH = normalizeCdnPath(
  ENV.VITE_CF_IMAGE_PATH || ENV.VUE_APP_CF_IMAGE_PATH || "/cdn-cgi/image/"
);

const isVectorAsset = (src) => {
  const lower = (src || "").toLowerCase();
  return lower.endsWith(".svg") || lower.endsWith(".gif");
};

const resolveAssetSrc = (asset) => {
  if (!asset) {
    return "";
  }
  const src = typeof asset === "string" ? asset : asset.src;
  if (!src) {
    return "";
  }
  if (isAbsoluteUrl(src)) {
    return src;
  }
  const assetRoot = typeof asset === "object" ? asset.assetRoot : "";
  if (!assetRoot) {
    return normalizePath(src);
  }
  return `${normalizePath(assetRoot)}/${normalizePath(src)}`;
};

const mediaUrl = (asset) => {
  const src = resolveAssetSrc(asset);
  if (!src) {
    return "";
  }
  if (isAbsoluteUrl(src)) {
    return src;
  }
  return `${MEDIA_BASE.replace(/\/+$/, "")}/${normalizePath(src)}`;
};

const buildImageParams = (options = {}) => {
  const params = [];
  const entries = {
    width: options.width,
    height: options.height,
    fit: options.fit,
    quality: options.quality,
    format: options.format,
    dpr: options.dpr,
  };

  Object.keys(entries).forEach((key) => {
    const value = entries[key];
    if (value !== undefined && value !== null && value !== "") {
      params.push(`${key}=${value}`);
    }
  });

  return params.join(",") || `format=${DEFAULT_IMAGE_FORMAT}`;
};

const imageUrl = (asset, options = {}) => {
  const src = resolveAssetSrc(asset);
  if (!src) {
    return "";
  }
  if (isAbsoluteUrl(src) || isVectorAsset(src)) {
    return mediaUrl(src);
  }
  const base = MEDIA_BASE.replace(/\/+$/, "");
  const params = buildImageParams({
    quality: DEFAULT_IMAGE_QUALITY,
    format: DEFAULT_IMAGE_FORMAT,
    ...options,
  });

  return `${base}${CF_IMAGE_PATH}${params}/${normalizePath(src)}`;
};

const buildSrcSet = (asset, widths = DEFAULT_SRCSET_WIDTHS, options = {}) => {
  const src = resolveAssetSrc(asset);
  if (!src || isVectorAsset(src)) {
    return "";
  }
  const cleanWidths = widths.filter((width) => Number.isFinite(width));
  return cleanWidths
    .map((width) => `${imageUrl(asset, { ...options, width })} ${width}w`)
    .join(", ");
};

const isMediaType = (media, type) => media && media.type === type;

export {
  MEDIA_BASE,
  CF_IMAGE_PATH,
  DEFAULT_SRCSET_WIDTHS,
  resolveAssetSrc,
  mediaUrl,
  imageUrl,
  buildSrcSet,
  isVectorAsset,
  isMediaType,
};
