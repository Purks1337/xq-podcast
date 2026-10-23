/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  openLightbox?: (photos: { src: string; title: string }[], index?: number) => void;
}
