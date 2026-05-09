import { motion } from 'framer-motion'
import { profile } from '../data'

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/60 to-transparent" />
      </div>

      <article className="rounded-2xl border border-[#64ffda]/20 bg-[#112240]/90 p-6 shadow-[0_14px_40px_rgba(10,25,47,0.6)] sm:p-8">
        <p className="text-[#b8c8e6]">
          Open to full-time opportunities, internships, and freelance collaborations. Let&apos;s build something meaningful.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded-xl border border-[#1f3f66] p-4 transition hover:border-[#64ffda]/60">
            <p className="text-xs uppercase tracking-[0.2em] text-[#64ffda]">Email</p>
            <p className="mt-1 text-sm text-[#e6f1ff]">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="rounded-xl border border-[#1f3f66] p-4 transition hover:border-[#64ffda]/60">
            <p className="text-xs uppercase tracking-[0.2em] text-[#64ffda]">Phone</p>
            <p className="mt-1 text-sm text-[#e6f1ff]">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[#1f3f66] p-4 transition hover:border-[#64ffda]/60"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#64ffda]">LinkedIn</p>
            <p className="mt-1 text-sm text-[#e6f1ff]">{profile.linkedin.label}</p>
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[#1f3f66] p-4 transition hover:border-[#64ffda]/60"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#64ffda]">GitHub</p>
            <p className="mt-1 text-sm text-[#e6f1ff]">{profile.github.label}</p>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span key={interest} className="rounded-full border border-[#a78bfa]/35 px-3 py-1 text-xs text-[#d6e3ff]">
              {interest}
            </span>
          ))}
        </div>
      </article>
    </motion.section>
  )
}

export default Contact