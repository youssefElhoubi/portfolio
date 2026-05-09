import { motion } from 'framer-motion'
import { experiences } from '../data'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const entry = { hidden: { opacity: 0, y: 20, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } } }

function Experience() {
  return (
    <motion.section id="experience" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={list} className="border-b border-[#64ffda]/10 py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/60 to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#64ffda] to-transparent opacity-30" />

        <div className="ml-12 space-y-8">
          {experiences.map((item, idx) => (
            <motion.article key={`${item.company}-${item.period}`} variants={entry} className={`relative overflow-hidden rounded-2xl border ${item.company.toLowerCase().includes('skoolution') ? 'border-[#64ffda]/50 bg-[#071426]/80 p-6 shadow-[0_20px_60px_rgba(100,255,218,0.06)]' : 'border-[#112b45] bg-[#071426]/70 p-6'}`}>
              <span className="absolute -left-7 top-6 flex h-5 w-5 items-center justify-center rounded-full bg-[#0a192f] ring-2 ring-[#64ffda]">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#64ffda]" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 110 20 10 10 0 010-20z"/></svg>
              </span>

              <div className="flex items-start justify-between">
                <div>
                  <p className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.2em] text-[#64ffda]">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#e6f1ff]">{item.role}</h3>
                  <p className="text-sm text-[#a8bcde]">{item.company}</p>
                </div>
                <div className="text-sm text-[#9bb0d3]">{idx === 0 ? <span className="inline-block rounded-md bg-[#064e3b] px-2 py-1 text-xs text-[#b7ffe0]">Featured</span> : null}</div>
              </div>

              <p className="mt-4 text-[#b8c8e6]">{item.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <motion.span key={tech} whileHover={{ scale: 1.04 }} className="rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#a78bfa]/20 px-3 py-1 text-xs text-[#dcecff] ring-1 ring-[#64ffda]/20">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience