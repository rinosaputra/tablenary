import type { JSX } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import StatisticsCard from '@/shared/shadcn-studio-ui/blocks/statistics-card-04'
import EarningReportCard from '@/shared/shadcn-studio-ui/blocks/chart-earning-report'
import SeoRippleBg from './seo-ripple-bg'
import SocialMedia from './social-media'

import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { Marquee } from '@/shared/shadcn-studio-ui/marquee'
import { MotionPreset } from '@/shared/shadcn-studio-ui/motion-preset'
import { TablenaryLogo } from '@/shared/ui/tablenary-logo'
import { cn } from '@/shared/lib/utils'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type RealTimeDataItem = {
  title: string
  badgeContent: string
  value: string
  changePercentage: number
  svg: JSX.Element
}

type EarningReportItem = {
  icon: JSX.Element
  title: string
  department: string
  value: string
  trend: string
  percentage: number
}

type EarningReportChartItem = {
  day: string
  earning: number
  fill: string
}

type SocialMediaItem = {
  image: string
  name: string
}

// ---------------------------------------------------------------------------
// Default Data — Tablenary themed
// ---------------------------------------------------------------------------

const defaultRealTimeData: RealTimeDataItem[] = [
  {
    title: 'Users',
    badgeContent: 'Last 6 months',
    value: '8.14k',
    changePercentage: 18.2,
    svg: (
      <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
        <circle cx='32' cy='20' r='10' className='fill-primary/20' />
        <path d='M12 52c0-11.046 8.954-20 20-20s20 8.954 20 20' className='stroke-primary/20' strokeWidth='4' />
      </svg>
    ),
  },
  {
    title: 'Sessions',
    badgeContent: 'Last month',
    value: '12.2k',
    changePercentage: -25.5,
    svg: (
      <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
        <circle cx='32' cy='32' r='24' className='stroke-primary/20' strokeWidth='4' />
        <path d='M32 16v16l10 10' className='stroke-primary/40' strokeWidth='4' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    title: 'Customers',
    badgeContent: 'Daily customers',
    value: '42.4k',
    changePercentage: 9.2,
    svg: (
      <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
        <rect x='8' y='16' width='48' height='32' rx='4' className='fill-primary/10 stroke-primary/20' strokeWidth='2' />
        <circle cx='32' cy='32' r='6' className='fill-primary/30' />
      </svg>
    ),
  },
  {
    title: 'Total Orders',
    badgeContent: 'Last week',
    value: '42.5k',
    changePercentage: 10.8,
    svg: (
      <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
        <path d='M12 20h40l-4 24H16L12 20z' className='fill-primary/10 stroke-primary/20' strokeWidth='2' />
        <circle cx='24' cy='50' r='4' className='fill-primary/30' />
        <circle cx='40' cy='50' r='4' className='fill-primary/30' />
      </svg>
    ),
  },
]

const defaultEarningReportData: EarningReportItem[] = [
  {
    icon: <ArrowRightIcon className='size-4' />,
    title: 'Revenue',
    department: 'Sales',
    value: '$1,623',
    trend: 'up',
    percentage: 20.3,
  },
  {
    icon: <ArrowRightIcon className='size-4' />,
    title: 'Income',
    department: 'Affiliation',
    value: '$5,600',
    trend: 'up',
    percentage: 16.2,
  },
  {
    icon: <ArrowRightIcon className='size-4' />,
    title: 'Expense',
    department: 'Marketing',
    value: '$3,200',
    trend: 'up',
    percentage: 10.5,
  },
]

const defaultEarningReportChartData: EarningReportChartItem[] = [
  { day: 'Mon', earning: 48, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Tue', earning: 147, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Wed', earning: 106, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Thu', earning: 180, fill: 'var(--primary)' },
  { day: 'Fri', earning: 75, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Sat', earning: 60, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Sun', earning: 128, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
]

const defaultSocialMediaData: SocialMediaItem[] = [
  { image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/instagram-icon.png', name: 'Instagram' },
  { image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png', name: 'Twitter' },
  { image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png', name: 'Facebook' },
  { image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/linkdin-icon.png', name: 'LinkedIn' },
  { image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png', name: 'Github' },
]

// ---------------------------------------------------------------------------
// Props & Component
// ---------------------------------------------------------------------------

interface FeaturesSectionProps {
  realTimeData?: RealTimeDataItem[]
  earningReportData?: EarningReportItem[]
  earningReportChartData?: EarningReportChartItem[]
  socialMediaData?: SocialMediaItem[]
}

export function FeaturesSection({
  realTimeData = defaultRealTimeData,
  earningReportData = defaultEarningReportData,
  earningReportChartData = defaultEarningReportChartData,
  socialMediaData = defaultSocialMediaData,
}: FeaturesSectionProps) {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-16 space-y-4 text-center'>
          <MotionPreset
            className='text-primary text-sm font-medium'
            fade
            slide={{ direction: 'down', offset: 30 }}
            blur
            transition={{ duration: 0.6 }}
          >
            <Badge variant='outline' className='text-sm font-normal'>
              Features
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            delay={0.2}
            transition={{ duration: 0.6 }}
          >
            Turn your marketing data into actionable insights
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground mx-auto max-w-3xl text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.6 }}
          >
            See what drives growth with real-time analytics and easy-to-understand dashboards.
          </MotionPreset>

          <MotionPreset
            className='flex flex-wrap items-center justify-center gap-4 text-center'
            fade
            slide={{ direction: 'down', offset: 30 }}
            blur
            delay={0.6}
            transition={{ duration: 0.6 }}
          >
            <Button size='lg' className='rounded-lg text-base shadow-none has-[>svg]:px-6'>
              Get Started — Free{' '}
              <TablenaryLogo className={cn('size-6', 'h-5 w-5')} />
            </Button>

            <Button
              nativeButton={false}
              variant='outline'
              className='rounded-lg text-base shadow-none has-[>svg]:px-6'
              size='lg'
              render={(props) => <a href='#features' {...props} />}
            >
              View Pricing <ArrowRightIcon />
            </Button>
          </MotionPreset>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {/* ── Column 1 ──────────────────────────────────────────────── */}
          <div className='flex flex-col gap-6'>
            {/* SEO Card */}
            <MotionPreset fade blur slide={{ offset: 50 }} delay={1} transition={{ duration: 0.6 }}>
              <Card className='shadow-none'>
                <CardContent>
                  <MotionPreset
                    fade
                    slide={{ direction: 'down', offset: 35 }}
                    delay={1.05}
                    transition={{ duration: 0.5 }}
                    className='relative mx-auto flex h-full w-fit justify-center'
                  >
                    <SeoRippleBg className='pointer-events-none size-45 select-none text-border' />

                    <div className='absolute top-1/2 -translate-y-1/2'>
                      <Avatar className='size-16 rounded-full border shadow-lg'>
                        <AvatarFallback className='bg-background text-primary shrink-0 rounded-sm'>
                          <TablenaryLogo className='size-8' />
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Floating badges */}
                    <MotionPreset
                      fade
                      className='absolute top-8 -left-3 -rotate-5'
                      motionProps={{
                        animate: { y: [0, -10, 0], opacity: 1 },
                        transition: { y: { duration: 2, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.2 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Marketing
                      </Badge>
                    </MotionPreset>

                    <MotionPreset
                      fade
                      className='absolute bottom-15 -left-9 rotate-5'
                      motionProps={{
                        animate: { y: [0, -9, 0], opacity: 1 },
                        transition: { y: { duration: 1.9, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.35 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Search
                      </Badge>
                    </MotionPreset>

                    <MotionPreset
                      fade
                      className='absolute bottom-3 -left-3 -rotate-2'
                      motionProps={{
                        animate: { y: [0, -9, 0], opacity: 1 },
                        transition: { y: { duration: 1.9, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.35 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Google
                      </Badge>
                    </MotionPreset>

                    <MotionPreset
                      fade
                      className='absolute top-3 -right-5 -rotate-10'
                      motionProps={{
                        animate: { y: [0, -10, 0], opacity: 1 },
                        transition: { y: { duration: 2.1, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.5 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Keywords
                      </Badge>
                    </MotionPreset>

                    <MotionPreset
                      fade
                      className='absolute -right-12 bottom-15 rotate-10'
                      motionProps={{
                        animate: { y: [0, -8, 0], opacity: 1 },
                        transition: { y: { duration: 1.8, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.65 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Analytics
                      </Badge>
                    </MotionPreset>

                    <MotionPreset
                      fade
                      className='absolute right-0 bottom-3 -rotate-10'
                      motionProps={{
                        animate: { y: [0, -8, 0], opacity: 1 },
                        transition: { y: { duration: 1.8, repeat: Infinity, ease: 'easeOut' }, opacity: { duration: 0.5, delay: 1.65 } },
                      }}
                    >
                      <Badge className='border-border bg-background px-3 py-1.5 font-normal text-foreground gap-2.5 transition-shadow duration-200 hover:shadow-sm'>
                        Ranking
                      </Badge>
                    </MotionPreset>
                  </MotionPreset>
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>SEO</CardTitle>
                  <CardDescription className='text-lg'>
                    Optimize your website and content for better visibility, higher traffic, and improved search
                    rankings.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Cross-Platform Integration Card */}
            <MotionPreset fade blur delay={1.2} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.6 }} className='flex-1'>
              <Card className='h-full shadow-none'>
                <div className='flex flex-1 flex-col justify-center gap-4'>
                  <Marquee pauseOnHover duration={22} gap={1.5} className='py-0'>
                    {socialMediaData.map((socialMedia, index) => (
                      <Badge variant='outline' key={index} className='px-3 py-1.5 font-normal'>
                        <img src={socialMedia.image} alt={socialMedia.name} className='size-5.5' />
                        {socialMedia.name}
                      </Badge>
                    ))}
                  </Marquee>
                  <Marquee pauseOnHover reverse duration={22} gap={1.5} className='py-0'>
                    {socialMediaData.map((socialMedia, index) => (
                      <Badge variant='outline' key={index} className='px-3 py-1.5 font-normal'>
                        <img src={socialMedia.image} alt={socialMedia.name} className='size-5.5' />
                        {socialMedia.name}
                      </Badge>
                    ))}
                  </Marquee>
                </div>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Cross-Platform Integration</CardTitle>
                  <CardDescription className='text-lg'>
                    Seamlessly connect all your marketing channels and data sources for a unified, 360° view of your
                    performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          </div>

          {/* ── Column 2 — Customizable Dashboards ───────────────────── */}
          <MotionPreset fade blur zoom delay={0.8} transition={{ duration: 0.6 }}>
            <Card className='h-full justify-between pt-3 shadow-none'>
              <CardContent className='px-3'>
                <EarningReportCard
                  title='Earning Report'
                  subTitle='Weekly Earning overview'
                  statData={earningReportData}
                  chartData={earningReportChartData}
                  className='bg-muted w-full shadow-none max-md:*:px-3'
                />
              </CardContent>
              <CardHeader className='gap-4'>
                <CardTitle className='text-2xl'>Customizable Dashboards</CardTitle>
                <CardDescription className='text-lg'>
                  Tailor your dashboard to display the metrics that matter most, giving you actionable insights at a
                  glance.
                </CardDescription>
              </CardHeader>
            </Card>
          </MotionPreset>

          {/* ── Column 3 ─────────────────────────────────────────────── */}
          <div className='flex flex-col gap-6 sm:max-xl:col-span-full sm:max-xl:grid sm:max-xl:grid-cols-2'>
            {/* Social Media Marketing Card */}
            <MotionPreset fade blur delay={1} slide={{ direction: 'right', offset: 50 }} transition={{ duration: 0.6 }}>
              <Card className='h-full shadow-none'>
                <CardContent className='flex flex-1 items-center'>
                  <SocialMedia />
                </CardContent>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Social Media Marketing</CardTitle>
                  <CardDescription className='text-lg'>
                    Track and optimize your social media campaigns with detailed insights.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Real-Time Analytics Card */}
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={1.2} transition={{ duration: 0.6 }} className='h-full'>
              <Card className='shadow-none'>
                <Marquee pauseOnHover gap={1.5} duration={30} className='py-0'>
                  {realTimeData.map((card, index) => (
                    <StatisticsCard
                      key={index}
                      title={card.title}
                      badgeContent={card.badgeContent}
                      value={card.value}
                      changePercentage={card.changePercentage}
                      svg={card.svg}
                      className='w-67.5 shadow-none'
                    />
                  ))}
                </Marquee>
                <CardHeader className='gap-4'>
                  <CardTitle className='text-2xl'>Real-Time Analytics</CardTitle>
                  <CardDescription className='text-lg'>
                    Access live data and monitor your campaigns in real-time to make informed decisions and react
                    quickly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
