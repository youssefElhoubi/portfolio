import { motion } from 'framer-motion'
import { skills } from '../data'

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Skills</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#a78bfa]/60 to-transparent" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-[#1f3f66] bg-[#112240]/85 p-5 transition hover:-translate-y-1 hover:border-[#64ffda]/50"
          >
            <h3 className="mb-4 font-['JetBrains_Mono',monospace] text-sm uppercase tracking-[0.2em] text-[#64ffda]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#a78bfa]/35 bg-[#0a192f] px-3 py-1.5 text-xs text-[#d6e3ff] transition hover:border-[#64ffda]/70 hover:text-[#64ffda]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills