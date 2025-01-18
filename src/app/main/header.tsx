import { Button } from '@/components/ui/button'
import NinjaLogo from '@/components/ninja-logo'
import Link from 'next/link'
import CalendlyLink from '@/components/calendly/popup-text'

const Header = () => {
  return (
    <header className='border-b border-gray-200 dark:border-gray-700 md:sticky top-0 bg-gray-900 dark:bg-gray-900 z-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='flex items-center gap-2 shrink-0'>
            <NinjaLogo className='w-8 h-8 fill-gray-900 dark:fill-white' />
            <span className='hidden md:inline-block text-gray-900 dark:text-white font-bold text-xl'>
              CreditNinja.pro
            </span>
          </Link>

          <nav className='hidden md:flex space-x-6 mx-4'>
            <Link
              href='#services'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            >
              Services
            </Link>
            <Link
              href='#process'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            >
              Our Process
            </Link>
            <Link
              href='#testimonials'
              className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            >
              Testimonials
            </Link>
          </nav>

          <div className='flex items-center shrink-0'>
            <CalendlyLink>
              <Button variant='secondary' className='whitespace-nowrap'>
                Get a consultation today!
              </Button>
            </CalendlyLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
