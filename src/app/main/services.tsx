import { Card } from '@/components/ui/card'
import { CheckCircle, Shield, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Services = () => (
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
          We offer professional credit repair services tailored to your unique
          situation.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-8'>
        <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
          <CheckCircle className='h-12 w-12 text-indigo-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
            Credit Report Analysis
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            Detailed review of your credit reports from all three major bureaus
            to identify negative items.
          </p>
        </Card>
        <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
          <Shield className='h-12 w-12 text-indigo-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
            Dispute Resolution
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            Professional handling of disputes for inaccurate, unverifiable, or
            outdated information.
          </p>
        </Card>
        <Card className='bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6'>
          <TrendingUp className='h-12 w-12 text-indigo-500 mb-4' />
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
            Score Improvement
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            Strategic guidance and actionable steps to improve your credit score
            over time.
          </p>
        </Card>
      </div>
    </div>
  </section>
)

export default Services
