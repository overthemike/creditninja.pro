import CalendlyLink from '@/components/calendly/popup-text'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Getstarted = () => (
  <section className='bg-white dark:bg-gray-800 py-16'>
    <div className='container mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <Badge variant='secondary' className='hidden md:inline-block mb-4'>
          Get Started Today
        </Badge>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
          Take the First Step Towards Better Credit
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-8'>
          Schedule your free consultation with our credit repair experts and
          start your journey to financial freedom.
        </p>
        <div className='flex gap-4 justify-center'>
          <CalendlyLink>
            <Button
              size='lg'
              className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xl'
            >
              Schedule Consultation
            </Button>
          </CalendlyLink>
          {/* <Button variant='outline' size='lg'>
                  Learn More
                </Button> */}
        </div>
      </div>
    </div>
  </section>
)

export default Getstarted
