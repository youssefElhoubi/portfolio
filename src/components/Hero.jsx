import { motion } from 'framer-motion'
import { profile } from '../data'
import { useTyping } from '../hooks/useTyping'

const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Hero() {
  const typedTitle = useTyping(profile.title)

  return (
    <header id="hero" className="border-b border-[#64ffda]/10 py-20 sm:py-24">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
        <div>
          <motion.p variants={item} className="mb-3 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.35em] text-[#64ffda] sm:text-sm">Portfolio 2026</motion.p>

          <motion.h1 variants={item} initial={{ x: -120, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }} className="font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-tight text-[#e6f1ff] sm:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.h2 variants={item} className="mt-4 min-h-[2.5rem] font-['JetBrains_Mono',monospace] text-xl text-[#a78bfa] sm:text-2xl">
            {typedTitle}
            <span className="ml-2 inline-block h-6 w-[2px] animate-pulse bg-[#64ffda] align-middle" aria-hidden="true" />
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-[#b8c8e6] sm:text-lg">
            {profile.shortBio} I focus on developer ergonomics, maintainable codebases, and delightful user experiences.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} href="#projects" className="rounded-full bg-[#64ffda] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0a192f] shadow-[0_10px_30px_rgba(100,255,218,0.14)]">
              View Projects
            </motion.a>

            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} href="#contact" className="rounded-full border border-[#a78bfa]/80 px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#e6f1ff] hover:bg-[#a78bfa]/10">
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        <aside>
          <motion.div variants={item} className="rounded-2xl border border-[#64ffda]/20 bg-[#0d1b2a]/70 p-6 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-[#64ffda]">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              <motion.a whileHover={{ scale: 1.05 }} href={profile.github.url} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full border border-[#64ffda]/40 p-3 text-[#ccd6f6] transition hover:border-[#64ffda] hover:text-[#64ffda]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.595 2 12.262c0 4.53 2.865 8.374 6.839 9.73.5.096.682-.223.682-.495 0-.245-.009-.893-.014-1.752-2.782.62-3.369-1.37-3.369-1.37-.455-1.187-1.11-1.503-1.11-1.503-.908-.638.069-.626.069-.626 1.004.072 1.533 1.056 1.533 1.056.893 1.571 2.341 1.117 2.91.854.091-.664.349-1.117.635-1.374-2.221-.258-4.556-1.14-4.556-5.075 0-1.121.39-2.038 1.029-2.756-.103-.26-.446-1.302.097-2.714 0 0 .84-.276 2.75 1.053A9.36 9.36 0 0 1 12 6.84c.85.004 1.705.117 2.504.344 1.909-1.33 2.748-1.053 2.748-1.053.544 1.412.201 2.454.099 2.714.64.718 1.028 1.635 1.028 2.756 0 3.945-2.339 4.814-4.566 5.068.359.317.679.942.679 1.898 0 1.37-.012 2.476-.012 2.813 0 .275.18.596.688.494C19.138 20.632 22 16.79 22 12.262 22 6.595 17.523 2 12 2z"/></svg>
              </motion.a>

              <motion.a whileHover={{ scale: 1.05 }} href={profile.linkedin.url} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-[#64ffda]/40 p-3 text-[#ccd6f6] transition hover:border-[#64ffda] hover:text-[#64ffda]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.15h.05c.53-1 1.82-2.15 3.75-2.15C19.13 8 20 10.22 20 13.11V23h-4v-8.03c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V23h-4V8z"/></svg>
              </motion.a>

              <motion.a whileHover={{ scale: 1.05 }} href={`mailto:${profile.email}`} aria-label="Email address" className="rounded-full border border-[#64ffda]/40 p-3 text-[#ccd6f6] transition hover:border-[#64ffda] hover:text-[#64ffda]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>
              </motion.a>
            </div>

            <p className="mt-4 text-sm text-[#9bb0d3]">Building robust web products with React, Next.js, NestJS, Spring Boot, and production-ready infra.</p>
          </motion.div>
        </aside>
      </motion.div>
    </header>
  )
}

export default Hero