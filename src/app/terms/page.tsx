'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const TermsOfService = () => {
  return (
    <Dialog>
      <DialogTrigger className='text-gray-400 hover:text-gray-300'>
        Terms of Service
      </DialogTrigger>
      <DialogContent className='max-w-3xl max-h-[80vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold mb-4'>
            Terms of Service
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 text-sm'>
          <section>
            <h2 className='text-lg font-semibold mb-2'>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              2. Services Description
            </h2>
            <p>
              We provide credit repair consultation and advisory services. Our
              services include:
            </p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Credit report analysis</li>
              <li>Personalized credit improvement strategies</li>
              <li>Consultation services</li>
              <li>Educational resources</li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>3. User Obligations</h2>
            <p>You agree to:</p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Notify us of any unauthorized account use</li>
              <li>Use our services only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>4. Payment Terms</h2>
            <p>By scheduling a consultation, you agree to:</p>
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Pay the agreed-upon fees for services</li>
              <li>Provide accurate billing information</li>
              <li>
                Honor your scheduled appointments or provide notice of
                cancellation
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              5. Cancellation Policy
            </h2>
            <p>
              Please provide at least 24 hours notice for cancellation of
              scheduled appointments. Failure to provide adequate notice may
              result in charging the full consultation fee.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided &quot;as is&quot; without any warranty.
              We do not guarantee specific results from using our services.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              7. Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of our
              services.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of our services after such modifications constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className='text-lg font-semibold mb-2'>
              9. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className='mt-2'>[Your Contact Information]</p>
          </section>

          <p className='text-sm text-gray-500 mt-6'>
            Last updated: January 10, 2025
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TermsOfService
