'use client'
import { useEffect, ReactNode } from 'react'

type CalendlyLinkProps = {
  children: ReactNode
}

// Create a flag to track script loading status
let isLoadingScript = false
let isScriptLoaded = false

// Function to load Calendly scripts once
const loadCalendlyScripts = (): Promise<void> => {
  return new Promise((resolve) => {
    // If already loaded, resolve immediately
    if (isScriptLoaded) {
      resolve()
      return
    }

    // If currently loading, wait for it
    if (isLoadingScript) {
      const checkLoaded = setInterval(() => {
        if (isScriptLoaded) {
          clearInterval(checkLoaded)
          resolve()
        }
      }, 100)
      return
    }

    // Start loading
    isLoadingScript = true

    // Load CSS if not present
    const existingLink = document.querySelector(
      'link[href*="calendly.com/assets/external/widget.css"]'
    )
    if (!existingLink) {
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }

    // Load JS if not present
    const existingScript = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    )
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => {
        isScriptLoaded = true
        isLoadingScript = false
        resolve()
      }
      document.head.appendChild(script)
    } else {
      isScriptLoaded = true
      isLoadingScript = false
      resolve()
    }
  })
}

const CalendlyLink = ({ children }: CalendlyLinkProps) => {
  useEffect(() => {
    loadCalendlyScripts()
  }, [])

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    await loadCalendlyScripts() // Ensure scripts are loaded before initializing
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dcreditninja/30min?background_color=0f172a&text_color=f8fafc&primary_color='
      })
    }
  }

  return (
    <div onClick={handleClick} className='p-4 md:p-0 cursor-pointer'>
      {children}
    </div>
  )
}

export default CalendlyLink
