import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowToTop(window.scrollY > 450)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-[#e6f1ff] selection:bg-[#64ffda]/30 selection:text-[#64ffda]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#64ffda]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-[#a78bfa]/20 blur-3xl" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-5 pb-14 pt-24 sm:px-8 md:pt-28">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {showToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 rounded-full border border-[#64ffda]/50 bg-[#112240]/90 p-3 text-[#64ffda] shadow-[0_0_22px_rgba(100,255,218,0.3)] transition hover:-translate-y-1 hover:bg-[#1f3255] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App