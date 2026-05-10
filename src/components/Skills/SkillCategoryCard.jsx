import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSkillChip from './AnimatedSkillChip'
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function SkillCategoryCard({ category, items }) {
    console.log(items);
  return (
    <motion.section variants={cardVariants} className="rounded-2xl border border-transparent bg-gradient-to-br from-[#061026]/60 to-[#071226]/40 p-5 transition-transform hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(100,255,218,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#64ffda]">{category}</h4>
        <div className="h-6 w-6 rounded-md border border-[#1f3f66] bg-[#071226]" />
      </div>

      <div className="grid auto-rows-min grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((skill) => (
          <AnimatedSkillChip key={skill.name} skill={skill} category={category} />
        ))}
      </div>
    </motion.section>
  )
}
