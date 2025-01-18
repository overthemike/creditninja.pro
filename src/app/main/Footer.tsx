import NinjaLogo from '@/components/ninja-logo'
import ContactForm from '../contact/page'
import PrivacyPolicy from '../privacy/page'
import TermsOfService from '../terms/page'

const Footer = () => (
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
          <PrivacyPolicy />
          <TermsOfService />
          <ContactForm />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
