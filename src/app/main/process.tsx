import { Badge } from '@/components/ui/badge'

const Process = () => (
  <section className='bg-gray-50 dark:bg-gray-900 py-16' id='process'>
    <div className='container mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center mb-12'>
        <Badge variant='secondary' className='hidden md:inline-block mb-4'>
          How It Works
        </Badge>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
          Our Credit Repair Process
        </h2>
        <p className='text-gray-600 dark:text-gray-300'>
          We follow a proven, systematic approach to help improve your credit
          score
        </p>
      </div>
      <div className='grid md:grid-cols-4 gap-8'>
        {[
          {
            step: '1',
            title: 'Schedule a Consultation',
            description: 'We review your situation and explain how we can help.'
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
            <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-48'>
              <div className='w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mb-4'>
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
)

export default Process
