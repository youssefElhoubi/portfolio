import { motion } from 'framer-motion'
import { education } from '../data'

function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Education</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/50 to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article key={`${item.institution}-${item.period}`} className="rounded-2xl border border-[#1f3f66] bg-[#112240]/80 p-5">
            <p className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.2em] text-[#64ffda]">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-[#e6f1ff]">{item.program}</h3>
            <p className="mt-1 text-[#c3d5f4]">{item.institution}</p>
            <p className="mt-2 text-sm text-[#9bb0d3]">{item.location}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Education