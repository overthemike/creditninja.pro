'use client'
import { useEffect } from 'react'

const CalendlyBadge = () => {
  useEffect(() => {
    // Override Calendly's default fixed positioning
    const style = document.createElement('style')
    style.textContent = `
      .calendly-badge-widget {
        position: static !important;
        right: auto !important;
        bottom: auto !important;
      }
    `
    document.head.appendChild(style)

    // Check and load CSS if not already present
    const existingLink = document.querySelector(
      'link[href*="calendly.com/assets/external/widget.css"]'
    )
    if (!existingLink) {
      const head = document.querySelector('head')!
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      head.appendChild(link)
    }

    // Check and load JS if not already present
    const existingScript = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    )
    if (!existingScript) {
      const head = document.querySelector('head')!
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.type = 'text/javascript'
      script.async = true
      script.onload = initBadgeWidget
      head.appendChild(script)
    } else {
      // If script already exists, initialize widget directly
      initBadgeWidget()
    }

    function initBadgeWidget() {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/ninjaconsultings/30min?background_color=0f172a&text_color=f8fafc&primary_color=7c3aed',
          text: 'Schedule time with me',
          color: '#7c3aed',
          textColor: '#f8fafc'
        })
      }
    }

    // Cleanup function
    return () => {
      // Remove our custom style
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }

      // Safely remove the badge widget
      const badge = document.querySelector('.calendly-badge-widget')
      if (badge && badge.parentNode) {
        badge.parentNode.removeChild(badge)
      }

      // Only remove script and styles if we added them and they still exist
      if (!existingScript) {
        const script = document.querySelector(
          'script[src*="calendly.com/assets/external/widget.js"]'
        )
        if (script && script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }

      if (!existingLink) {
        const link = document.querySelector(
          'link[href*="calendly.com/assets/external/widget.css"]'
        )
        if (link && link.parentNode) {
          link.parentNode.removeChild(link)
        }
      }
    }
  }, [])

  // The button will be injected here in the normal document flow
  return <div className='calendly-badge-content' />
}

export default CalendlyBadge
