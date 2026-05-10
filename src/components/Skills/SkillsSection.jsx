// src/components/Skills/SkillsSection.jsx
import React from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import { motion } from 'framer-motion'
import { skills } from '../../data'
import SkillCategoryCard from './SkillCategoryCard'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }

function ParticlesBg() {
  const options = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ['#64ffda', '#a78bfa'] },
      opacity: { value: 0.07 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.6 },
      links: { enable: true, distance: 120, color: '#2b6b8a', opacity: 0.03, width: 1 },
    },
  }

  const init = async (engine) => {
    await loadFull(engine)
  }

  return <Particles id="skills-particles" init={init} options={options} className="absolute inset-0 -z-10 opacity-80" />
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative border-b border-[#64ffda]/10 py-16">
      <ParticlesBg />

      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-[#e6f1ff]">Skills</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#64ffda]/40 to-transparent" />
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <SkillCategoryCard key={group.category} category={group.category} items={group.items} />
        ))}
      </motion.div>
    </section>
  )
}
