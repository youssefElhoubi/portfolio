import { motion } from 'framer-motion'
import { experiences } from '../data'

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/60 to-transparent" />
      </div>

      <div className="relative ml-2 border-l-2 border-[#64ffda]/30 pl-8">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="relative mb-8 rounded-2xl border border-[#1f3f66] bg-[#112240]/80 p-6">
            <span className="absolute -left-[2.15rem] top-7 h-4 w-4 rounded-full border-2 border-[#64ffda] bg-[#0a192f]" />
            <p className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-[0.2em] text-[#64ffda]">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#e6f1ff]">{item.role}</h3>
            <p className="text-sm text-[#a8bcde]">{item.company}</p>
            <p className="mt-4 text-[#b8c8e6]">{item.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-[#0a192f] px-3 py-1 text-xs text-[#a78bfa] ring-1 ring-[#a78bfa]/40">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience