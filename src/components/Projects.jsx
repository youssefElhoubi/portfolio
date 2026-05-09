import { motion } from 'framer-motion'
import { projects } from '../data'

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function Projects() {
  return (
    <motion.section id="projects" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={grid} className="border-b border-[#64ffda]/10 py-16">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold">Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#a78bfa]/60 to-transparent" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.name} variants={card} whileHover={{ scale: 1.02, y: -6 }} className="group overflow-hidden rounded-2xl border border-[#112b45] bg-[#071226]/70 transition-shadow duration-300">
            <img src={project.image || 'https://placehold.co/600x400/1e293b/64ffda?text=Project+Name'} alt={project.name} className="h-44 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#e6f1ff]">{project.name}</h3>
              <p className="mt-3 text-[#b8c8e6]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <motion.span key={tech} whileHover={{ scale: 1.04 }} className="rounded-full border border-[#64ffda]/20 bg-[#0a2236] px-3 py-1 text-xs text-[#d7e8ff]">
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.05 }} href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#a78bfa]/40 bg-transparent px-4 py-2 text-xs font-semibold text-[#a78bfa] transition">
                  Live Demo
                </motion.a>

                <motion.a whileHover={{ scale: 1.05 }} href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#64ffda]/40 bg-transparent px-4 py-2 text-xs font-semibold text-[#64ffda] transition">
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects