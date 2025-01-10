'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cover } from '@/components/ui/cover'
import { CheckCircle, Shield, TrendingUp, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import NinjaLogo from '@/components/ninja-logo'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      quote:
        'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Lisa Thompson',
      designation: 'VP of Technology at FutureNet',
      src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200'>
      <header className='border-b border-gray-200 dark:border-gray-700 z-10 sticky top-0 bg-slate-50 dark:bg-gray-900'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2 z-10'>
            <NinjaLogo className='w-8 h-8 z-19 fill-gray-900 dark:fill-white' />
            <span className='text-gray-900 dark:text-white font-bold text-xl z-10'>
              CreditNinja.pro
            </span>
          </Link>
          <nav className='hidden md:flex gap-6'>
            <Link
              href='#services'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-10'
            >
              Services
            </Link>
            <Link
              href='#process'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-10'
            >
              Our Process
            </Link>
            <Link
              href='#testimonials'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-10'
            >
              Testimonials
            </Link>
          </nav>
          <div className='flex items-center gap-4 z-10'>
            <Button
              className='z-10'
              variant='ghost'
              size='icon'
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </Button>
            <Button variant='secondary' className='z-10'>
              Get a consultation today!
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className='overflow-hidden h-[60rem] position-relative'>
          <div className='container mx-auto py-16 md:py-24 '>
            <div className='grid md:grid-cols-2 gap-12 items-start'>
              <div className='flex flex-col'>
                <Badge variant='secondary' className='mb-4 self-start'>
                  Professional Credit Repair Services
                </Badge>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
                  Transform Your Credit Score With Expert Guidance{' '}
                  <Cover>Fast</Cover>
                </h1>
                <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl'>
                  Our team of credit repair specialists helps you identify and
                  remove inaccurate items from your credit report. Start your
                  journey to better credit today.
                </p>
                <div className='mt-auto z-10'>
                  <AnimatedTestimonials testimonials={testimonials} />
                </div>
              </div>
              <div className='flex flex-col z-10'>
                <Image
                  src='/meter.svg'
                  alt='Credit Score Improvement Visualization'
                  width={800}
                  height={600}
                  className='w-full h-auto mb-8'
                  priority
                />
                <div className='mt-auto'>
                  <Button
                    size='lg'
                    className='bg-purple-600 hover:bg-purple-700 text-white text-xl py-6 px-12 w-full md:w-auto z-10'
                  >
                    Let&apos;s get started now!
                  </Button>
                </div>
              </div>
            </div>
            <StarsBackground className='h-[64rem]' />
            <ShootingStars className='h-[64rem]' />
          </div>
        </section>

        <section className='bg-white dark:bg-gray-800 py-16' id='services'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <Badge variant='secondary' className='mb-4'>
                Our Services
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Comprehensive Credit Repair Solutions
              </h2>
              <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                We offer professional credit repair services tailored to your
                unique situation.
              </p>
            </div>
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
                <CheckCircle className='h-12 w-12 text-purple-500 mb-4' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                  Credit Report Analysis
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Detailed review of your credit reports from all three major
                  bureaus to identify negative items.
                </p>
              </Card>
              <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
                <Shield className='h-12 w-12 text-purple-500 mb-4' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                  Dispute Resolution
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Professional handling of disputes for inaccurate,
                  unverifiable, or outdated information.
                </p>
              </Card>
              <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
                <TrendingUp className='h-12 w-12 text-purple-500 mb-4' />
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                  Score Improvement
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Strategic guidance and actionable steps to improve your credit
                  score over time.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className='bg-gray-50 dark:bg-gray-900 py-16' id='process'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center mb-12'>
              <Badge variant='secondary' className='mb-4'>
                How It Works
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Our Credit Repair Process
              </h2>
              <p className='text-gray-600 dark:text-gray-300'>
                We follow a proven, systematic approach to help improve your
                credit score
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  description:
                    'We review your situation and explain how we can help.'
                },
                {
                  step: '2',
                  title: 'Credit Analysis',
                  description: 'We analyze your credit reports in detail.'
                },
                {
                  step: '3',
                  title: 'Dispute Process',
                  description: 'We challenge inaccurate items on your behalf.'
                },
                {
                  step: '4',
                  title: 'Score Improvement',
                  description: 'Watch your credit score improve over time.'
                }
              ].map((item) => (
                <div key={item.step} className='relative'>
                  <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6'>
                    <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4'>
                      {item.step}
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-white dark:bg-gray-800 py-16'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <Badge variant='secondary' className='mb-4'>
                Get Started Today
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                Take the First Step Towards Better Credit
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-8'>
                Schedule your free consultation with our credit repair experts
                and start your journey to financial freedom.
              </p>
              <div className='flex gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-purple-600 hover:bg-purple-700 text-white'
                >
                  Schedule Consultation
                </Button>
                <Button variant='outline' size='lg'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-gray-200 dark:border-gray-700 py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center gap-2'>
              <NinjaLogo className='w-6 h-6 fill-gray-900 dark:fill-white' />
              <span className='text-gray-600 dark:text-gray-300'>
                © {new Date().getFullYear()} CreditNinja.pro
              </span>
            </div>
            <div className='flex gap-6'>
              <Link
                href='/privacy'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm'
              >
                Terms of Service
              </Link>
              <Link
                href='/contact'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
