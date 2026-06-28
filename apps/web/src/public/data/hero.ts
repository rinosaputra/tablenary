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
