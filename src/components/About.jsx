import { motion } from 'framer-motion'
import { profile } from '../data'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">About</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-center">
        <div className="flex justify-center md:justify-start">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-[#a78bfa]/70 bg-[#112240] text-4xl font-bold text-[#e6f1ff] shadow-[0_0_40px_rgba(167,139,250,0.25)]">
            YE
          </div>
        </div>

        <article>
          <p className="text-base leading-relaxed text-[#b8c8e6] sm:text-lg">{profile.about}</p>

          <div className="mt-6">
            <p className="mb-3 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.25em] text-[#64ffda]">
              Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.languages.map((language) => (
                <span
                  key={language.name}
                  className="rounded-full border border-[#64ffda]/30 bg-[#0f223d] px-4 py-2 text-sm text-[#d9e6ff]"
                >
                  {language.name} • {language.level}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  )
}

export default About