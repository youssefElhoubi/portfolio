import { motion } from 'framer-motion'
import { education } from '../data'

const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function Education() {
  return (
    <motion.section id="education" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="border-b border-[#64ffda]/10 py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Education</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-6 hidden h-full w-px bg-[#2b4a6a] md:block" />

        <div className="space-y-8">
          {education.map((edu, idx) => {
            const left = idx % 2 === 0
            return (
              <motion.article key={`${edu.institution}-${edu.period}`} variants={item} className={`mx-auto flex w-full max-w-4xl items-start gap-6 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl border border-[#112b45] bg-[#071226]/70 p-5">
                    <p className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.18em] text-[#64ffda]">{edu.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#e6f1ff]">{edu.program}</h3>
                    <p className="mt-1 text-[#c3d5f4]">{edu.institution}</p>
                    <p className="mt-2 text-sm text-[#9bb0d3]">{edu.location}</p>
                  </div>
                </div>

                <div className="md:w-1/2 hidden md:block">
                  <div className="h-full w-full rounded-2xl border border-[#0f2a44] bg-gradient-to-br from-[#061025] to-[#071226]/40 p-4 flex items-center justify-center text-sm text-[#9bb0d3]">
                    {edu.institution} • {edu.period}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Education