'use client'
import { useEffect } from 'react'

const Calendly = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    )

    if (!existingScript) {
      const head = document.querySelector('head')!
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      head.appendChild(script)
    }
  }, [])

  return (
    <div
      className='calendly-inline-widget'
      data-url='https://calendly.com/dcreditninja/30min?background_color=0f172a&text_color=f8fafc&primary_color=7c3aed'
      style={{ minWidth: 320, height: 1200 }}
    />
  )
}

export default Calendly
