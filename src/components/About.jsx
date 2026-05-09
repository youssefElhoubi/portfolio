import { motion } from 'framer-motion'
import { profile } from '../data'

const barVariants = { hidden: { width: 0 }, show: (w) => ({ width: w, transition: { duration: 0.9, ease: 'easeOut' } }) }

function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="border-b border-[#64ffda]/10 py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">About</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex justify-center md:justify-start">
          <motion.img whileHover={{ scale: 1.03 }} src="https://placehold.co/400x400/0a192f/64ffda?text=YE" alt="Youssef Elhoubi" className="h-44 w-44 rounded-full border-4 border-[#64ffda] shadow-[0_20px_60px_rgba(100,255,218,0.08)] object-cover" />
        </div>

        <article>
          <p className="text-base leading-relaxed text-[#b8c8e6] sm:text-lg">{profile.about}</p>

          <div className="mt-6">
            <p className="mb-3 font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.25em] text-[#64ffda]">Languages</p>
            <div className="space-y-3">
              {profile.languages.map((lang, i) => {
                const widthLabel = lang.level === 'Native' ? '90%' : lang.level === 'Bilingual' ? '85%' : '60%'
                return (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-sm text-[#c8d8f4]">
                      <span>{lang.name}</span>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#9bb0d3]">{lang.level}</span>
                    </div>

                    <div className="mt-2 h-2 w-full rounded-full bg-[#0f2133]">
                      <motion.div custom={widthLabel} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={barVariants} className="h-2 rounded-full bg-gradient-to-r from-[#64ffda] to-[#a78bfa] shadow-[0_6px_18px_rgba(100,255,218,0.12)]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  )
}

export default About