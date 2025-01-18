'use client'

import Header from './header'
import Hero from './hero'
import Services from './services'
import Process from './process'
import Getstarted from './getstarted'
import Footer from './footer'

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Getstarted />
      </main>
      <Footer />
    </div>
  )
}
