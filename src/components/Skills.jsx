import { motion } from 'framer-motion'
import { skills } from '../data'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const chip = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

function Skills() {
  return (
    <motion.section id="skills" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="border-b border-[#64ffda]/10 py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Skills</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#a78bfa]/60 to-transparent" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="rounded-2xl border border-[#112b45] bg-[#071124]/70 p-5">
            <h3 className="mb-4 font-['JetBrains_Mono',monospace] text-sm uppercase tracking-[0.2em] text-[#64ffda]">{group.category}</h3>

            <motion.div className="flex flex-wrap gap-3" variants={container}>
              {group.items.map((item) => (
                <motion.span key={item} variants={chip} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 rounded-full border border-[#1f3f66] bg-[#071c32] px-3 py-2 text-xs text-[#d6e3ff] shadow-[0_8px_22px_rgba(167,139,250,0.03)] transition" title={item}>
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#64ffda] to-[#a78bfa] shadow-[0_6px_16px_rgba(100,255,218,0.08)]" />
                  <span className="font-medium">{item}</span>
                </motion.span>
              ))}
            </motion.div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills