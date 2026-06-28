/**
 * Hero section data — extracted from hero-section/index.tsx.
 */

import type { AvatarItem, BrandLogoItem, TotalSalesChartItem, TotalSalesBreakdownItem } from '../types';
import { GlobeIcon, StoreIcon } from 'lucide-react';

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
export const brandLogos: BrandLogoItem[] = [
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

/**
 * Chart data for the total sales card chart
 * (time, online store visits, offline store visits).
 */
export const totalSalesChartData: TotalSalesChartItem[] = [
  { time: '09:00', uv: 88, pv: 88 },
  { time: '10:00', uv: 88, pv: 88 },
  { time: '11:00', uv: 144, pv: 144 },
  { time: '12:00', uv: 144, pv: 144 },
  { time: '13:00', uv: 109, pv: 109 },
  { time: '14:00', uv: 102, pv: 109 },
  { time: '15:00', uv: 62, pv: 62 },
  { time: '16:00', uv: 62, pv: 62 },
  { time: '17:00', uv: 128, pv: 144 },
  { time: '18:00', uv: 144, pv: 144 },
  { time: '19:00', uv: 183, pv: 200 },
  { time: '20:00', uv: 200, pv: 200 },
];

/** Chart configuration for the total sales card */
export const totalSalesChartConfig = {
  uv: {
    label: 'Online Store',
    color: 'color-mix(in oklab, var(--chart-2) 10%, transparent)',
  },
  pv: {
    label: 'Offline Store',
    color: 'var(--chart-2)',
  },
};

/** Icon components for total sales breakdown rows */
export const totalSalesIcons = {
  globe: GlobeIcon,
  store: StoreIcon,
} as const;

/** Sales breakdown rows shown below the chart */
export const totalSalesBreakdown: TotalSalesBreakdownItem[] = [
  {
    icon: 'globe',
    platform: 'Online Store',
    sales: '$20k',
    growth: '+12.6%',
  },
  {
    icon: 'store',
    platform: 'Offline Store',
    sales: '$20k',
    growth: '-4.2%',
  },
];
