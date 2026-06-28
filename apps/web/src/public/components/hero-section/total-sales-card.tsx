import { TrendingUpIcon } from 'lucide-react'

import { Bar, ComposedChart, Line, XAxis } from 'recharts'

import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/ui/chart'
import { Separator } from '@/shared/ui/separator'

import { cn } from '@/shared/lib/utils'

import {
  totalSalesBreakdown,
  totalSalesChartData,
  totalSalesChartConfig,
  totalSalesIcons,
} from '../../data/hero'

const TotalSalesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('justify-between gap-4', className)}>
      <CardHeader className='flex flex-col'>
        <div className='flex w-full items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <Avatar className='size-8 rounded-sm'>
              <AvatarFallback className='bg-chart-2/10 text-chart-2 shrink-0 rounded-sm'>
                <TrendingUpIcon className='size-4' />
              </AvatarFallback>
            </Avatar>
            <span>Total sales</span>
          </div>
          <Button variant='outline' className='h-7 px-2 py-1 text-xs'>
            Details
          </Button>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-2xl font-semibold'>$2,150.00</span>
          <Badge className='bg-primary/10 [a&]:hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 rounded-sm focus-visible:ring-offset-0'>
            +5%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Separator />

        <div className='space-y-1'>
          {totalSalesBreakdown.map((item, index) => {
            const IconComponent = totalSalesIcons[item.icon]
            return (
              <div key={index} className='flex items-center justify-between gap-2 py-2'>
                <div className='text-muted-foreground flex items-center gap-2'>
                  <IconComponent className='size-4' />
                  <span className='text-sm'>{item.platform}</span>
                </div>

                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-muted-foreground'>{item.sales}</span>
                  <span>{item.growth}</span>
                </div>
              </div>
            )
          })}
        </div>

        <Separator />

        <ChartContainer config={totalSalesChartConfig} className='h-40 w-full'>
          <ComposedChart data={totalSalesChartData} margin={{ top: 4, right: 6 }}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <XAxis
              dataKey='time'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={15}
              tick={{ fontSize: 14, fill: 'var(--muted-foreground)' }}
            />
            <Bar dataKey='uv' barSize={16} fill='var(--color-uv)' radius={2} />
            <Line type='linear' dataKey='pv' stroke='var(--color-pv)' dot={false} strokeWidth={3} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TotalSalesCard
