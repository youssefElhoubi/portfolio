import { motion } from 'framer-motion'
import { profile } from '../data'

const formVar = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function Contact() {
  return (
    <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/60 to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.form variants={formVar} className="rounded-2xl border border-[#112b45] bg-[#071226]/70 p-6 shadow-[0_18px_60px_rgba(10,25,47,0.5)]">
          <p className="text-[#b8c8e6]">Interested in working together? Send a quick message or reach me directly via email or phone.</p>

          <div className="mt-6 grid gap-3">
            <input aria-label="Name" placeholder="Your name" className="w-full rounded-md border border-[#0f2a44] bg-[#061428] px-3 py-2 text-sm text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/30" />
            <input aria-label="Email" placeholder="you@example.com" className="w-full rounded-md border border-[#0f2a44] bg-[#061428] px-3 py-2 text-sm text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/30" />
            <textarea aria-label="Message" placeholder="Tell me about the project..." rows="5" className="w-full rounded-md border border-[#0f2a44] bg-[#061428] px-3 py-2 text-sm text-[#e6f1ff] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/30" />

            <div className="flex items-center gap-3">
              <button type="button" className="rounded-md bg-[#64ffda] px-4 py-2 text-sm font-semibold text-[#071226] shadow-[0_8px_30px_rgba(100,255,218,0.12)]">Send Message</button>
              <button type="button" className="rounded-md border border-[#a78bfa]/40 px-4 py-2 text-sm font-semibold text-[#a78bfa]">Reset</button>
            </div>
          </div>
        </motion.form>

        <motion.aside variants={formVar} className="rounded-2xl border border-[#64ffda]/20 bg-[#0c1b2a]/70 p-6">
          <p className="text-[#b8c8e6]">Direct contact</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-[#1f3f66] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#64ffda]">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-1 block text-sm text-[#e6f1ff]">{profile.email}</a>
            </div>

            <div className="rounded-xl border border-[#1f3f66] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#64ffda]">Phone</p>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="mt-1 block text-sm text-[#e6f1ff]">{profile.phone}</a>
            </div>

            <div className="flex gap-3">
              <a href={profile.linkedin.url} target="_blank" rel="noreferrer" className="rounded-md border border-[#0f2a44] px-3 py-2 text-sm text-[#a78bfa]">LinkedIn</a>
              <a href={profile.github.url} target="_blank" rel="noreferrer" className="rounded-md border border-[#0f2a44] px-3 py-2 text-sm text-[#64ffda]">GitHub</a>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  )
}

export default Contact