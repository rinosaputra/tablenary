/**
 * Hero section data — extracted from hero-section/index.tsx.
 */

import type { AvatarItem } from '../types';

/** Words rotated by WordRotate in hero section. */
export const heroWords = ['Sales', 'Growth', 'Business'];

/** Default avatar items for hero section stats. */
export const defaultAvatars: AvatarItem[] = [
  { src: '/avatars/u1.png', fallback: 'U1', name: 'User 1' },
  { src: '/avatars/u2.png', fallback: 'U2', name: 'User 2' },
  { src: '/avatars/u3.png', fallback: 'U3', name: 'User 3' },
  { src: '/avatars/u4.png', fallback: 'U4', name: 'User 4' },
];

/** Brand logos rendered in the Marquee "Trusted by" section. */
export const brandLogos = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png',
    alt: 'University of Mississippi',
    className: 'h-7.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png',
    alt: 'Star Health',
    className: 'h-9 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png',
    alt: 'DHL',
    className: 'h-4 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png',
    alt: 'Sense Arena',
    className: 'h-11 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png',
    alt: 'Shemaroo',
    className: 'h-10 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png',
    alt: 'Mercedes Benz',
    className: 'h-7.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0',
  },
];
