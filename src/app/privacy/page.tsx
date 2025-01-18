'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger className='text-gray-400 hover:text-gray-300'>
        Privacy Policy
      </DialogTrigger>
      <DialogContent className='max-w-3xl max-h-[80vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold mb-4'>
            Privacy Policy
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 text-sm'>
          <section>
            <h2 className='text-lg font-semibold mb-2'>
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>
                Name and contact information when you schedule consultations
              </li>
              <li>Information provided through our contact forms</li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Schedule and manage consultations</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
              <li>
                Send you updates and marketing communications (with your
                consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              3. Third-Party Services
            </h2>
            <p>We use the following third-party services:</p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Calendly for scheduling consultations</li>
              <li>Stripe for payment processing (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us using the contact form by clicking &quot;Contact
              Us&quot; on the main page.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              7. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated date and will be effective
              as soon as it is accessible.
            </p>
          </section>

          <p className='text-sm text-gray-500 mt-6'>
            Last updated: January 10, 2025
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PrivacyPolicy
