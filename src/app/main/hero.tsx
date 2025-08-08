import CalendlyLink from '@/components/calendly/popup-text'
// import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { Button } from '@/components/ui/button'
import { Cover } from '@/components/ui/cover'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import { Badge } from '@/components/ui/badge'
// import testimonials from '../testimonials'
import Image from 'next/image'

const Hero = () => (
  <section className='overflow-hidden md:h-[60rem] position-relative'>
    <div className='container mx-auto py-8 md:px-4'>
      <div className='grid md:grid-cols-2 gap-12 items-start'>
        <div className='flex flex-col'>
          <Badge
            variant='secondary'
            className='hidden md:inline-block mb-4 self-start'
          >
            Professional Credit Repair Services
          </Badge>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 px-4 md:px-0'>
            Transform Your Credit Score With Expert Guidance <Cover>Fast</Cover>
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl pr-4 px-4 md:px-0'>
            Our team of credit repair specialists helps you identify and remove
            inaccurate items from your credit report. Start your journey to
            better credit today.
          </p>
          {/* <div className='z-10 md:mt-[26px]'>
            <AnimatedTestimonials testimonials={testimonials} />
          </div> */}
        </div>
        <div className='flex flex-col z-10 relative -top-24'>
          <Image
            src='/meter.svg'
            alt='Credit Score Improvement Visualization'
            width={800}
            height={600}
            className='w-full h-auto'
            priority
          />
          <div className='relative'>
            <Badge variant='secondary' className='hidden md:inline-block mb-8'>
              Scheudule a Consultation
            </Badge>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 px-4 md:px-0'>
              Don&apos;t wait to get started.
              <br />
              Schedule your call today and watch your score grow!
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                fill='none'
                className='hidden md:inline-block size-48 absolute left-20 -bottom-20 stroke-indigo-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
                />
              </svg>
            </h1>
            <CalendlyLink>
              <Button
                size='lg'
                className='bg-indigo-500 hover:bg-indigo-500 text-white font-bold text-xl py-6 px-12 w-full md:w-auto z-10 float-right mr-0 md:mr-16'
              >
                Schedule Consultation
              </Button>
            </CalendlyLink>
          </div>
        </div>
      </div>
      <StarsBackground className='h-[64rem]' />
      <ShootingStars className='h-[64rem]' />
    </div>
  </section>
)

export default Hero
