import { motion } from 'framer-motion'
import { projects } from '../data'

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="border-b border-[#64ffda]/10 py-14"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#a78bfa]/60 to-transparent" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-2xl border border-[#1f3f66] bg-[#112240]/85 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#64ffda]/50 hover:shadow-[0_14px_35px_rgba(10,25,47,0.7)]"
          >
            <h3 className="text-xl font-semibold text-[#e6f1ff]">{project.name}</h3>
            <p className="mt-3 text-[#b8c8e6]">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-[#64ffda]/25 px-3 py-1 text-xs text-[#d7e8ff]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#64ffda]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#64ffda] transition hover:bg-[#64ffda]/10"
              >
                GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#a78bfa]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#a78bfa] transition hover:bg-[#a78bfa]/10"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects