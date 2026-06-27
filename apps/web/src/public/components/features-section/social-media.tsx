import { useRef } from 'react'

import { AnimatedBeam } from '@/shared/shadcn-studio-ui/animated-beam'
import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { TablenaryLogo } from '@/shared/ui/tablenary-logo'

const SocialMedia = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logo1Ref = useRef<HTMLSpanElement>(null)
  const logo2Ref = useRef<HTMLSpanElement>(null)
  const logo3Ref = useRef<HTMLSpanElement>(null)
  const logo4Ref = useRef<HTMLSpanElement>(null)
  const logo5Ref = useRef<HTMLSpanElement>(null)
  const logo6Ref = useRef<HTMLSpanElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)

  const socialIcons = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Facebook', icon: '📘' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google', icon: '🔍' },
    { name: 'LinkedIn', icon: '💼' },
  ]

  return (
    <div ref={containerRef} className='relative z-1 flex w-full flex-col gap-5 px-1'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Avatar className='size-16 rounded-xl shadow-lg'>
          <AvatarFallback className='bg-background text-primary shrink-0 rounded-xl'>
            <TablenaryLogo className='size-8' />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <span ref={logo1Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='Instagram'>
            {socialIcons[0].icon}
          </span>
        </span>
        <span className='flex gap-20'>
          <span ref={span1Ref} className='size-0.5' />
          <span ref={span2Ref} className='size-0.5' />
        </span>
        <span ref={logo2Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='Twitter'>
            {socialIcons[1].icon}
          </span>
        </span>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <span ref={logo3Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='Facebook'>
            {socialIcons[2].icon}
          </span>
        </span>
        <span ref={span3Ref} className='size-0.5' />
        <span ref={logo4Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='GitHub'>
            {socialIcons[3].icon}
          </span>
        </span>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <span ref={logo5Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='Google'>
            {socialIcons[4].icon}
          </span>
        </span>
        <span className='flex gap-20'>
          <span ref={span4Ref} className='size-0.5' />
          <span ref={span5Ref} className='size-0.5' />
        </span>
        <span ref={logo6Ref} className='bg-card flex size-8.5 items-center justify-center rounded-md border'>
          <span role='img' aria-label='LinkedIn'>
            {socialIcons[5].icon}
          </span>
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo1Ref}
        toRef={span1Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo2Ref}
        toRef={span2Ref}
        reverse
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo3Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo4Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo5Ref}
        toRef={span4Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={span5Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logo6Ref}
        toRef={span5Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-1'
        duration={4}
      />
    </div>
  )
}

export default SocialMedia
