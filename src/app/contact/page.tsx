'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would add your form submission logic
    console.log('Form submitted:', formData)
    // You could send this to your API endpoint, email service, etc.
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Dialog>
      <DialogTrigger className='text-gray-400 hover:text-gray-300'>
        Contact Us
      </DialogTrigger>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold mb-4'>
            Contact Us
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Name Field */}
            <div className='space-y-2'>
              <label htmlFor='name' className='block text-sm font-medium'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>

            {/* Email Field */}
            <div className='space-y-2'>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className='space-y-2'>
            <label htmlFor='phone' className='block text-sm font-medium'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Preferred Contact Method */}
          <div className='space-y-2'>
            <label
              htmlFor='preferredContact'
              className='block text-sm font-medium'
            >
              Preferred Contact Method
            </label>
            <select
              id='preferredContact'
              name='preferredContact'
              value={formData.preferredContact}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
            >
              <option value='email'>Email</option>
              <option value='phone'>Phone</option>
            </select>
          </div>

          {/* Message Field */}
          <div className='space-y-2'>
            <label htmlFor='message' className='block text-sm font-medium'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className='w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-indigo-500 hover:bg-primary/90 text-white py-2 px-4 rounded-md transition duration-200'
          >
            Send Message
          </button>

          <p className='text-xs text-gray-500 text-center'>
            We&apos;ll get back to you within 24 hours during business days.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactForm
