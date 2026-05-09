import { motion } from 'framer-motion'
import { certifications } from '../data'

function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Certifications</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#a78bfa]/60 to-transparent" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <article key={cert.title} className="rounded-2xl border border-[#1f3f66] bg-[#112240]/85 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-[#64ffda]">{cert.year}</p>
            <h3 className="mt-2 text-sm font-semibold text-[#e6f1ff]">{cert.title}</h3>
            <p className="mt-2 text-xs text-[#a9bfdf]">{cert.issuer}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications