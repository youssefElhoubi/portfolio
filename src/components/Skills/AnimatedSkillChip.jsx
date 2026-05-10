// src/components/Skills/AnimatedSkillChip.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiSvelte,
  SiJavascript,
  SiTypescript,
  SiSpring,
  SiDocker,
  SiVisualstudiocode,
  SiFigma,
  SiAdobexd,
  SiPostman,
  SiIntellijidea,
  SiGit,
  SiGithub,
  SiTrello,
  SiJira,
} from 'react-icons/si'
import { FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaClipboardList, FaDrawPolygon, FaNetworkWired, FaDatabase, FaTools } from 'react-icons/fa'

// icon mapping: fall back to FaTools if missing
const ICONS = {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiSvelte,
  SiJavascript,
  SiTypescript,
  SiSpring,
  SiDocker,
  SiVisualstudiocode,
  SiFigma,
  SiAdobexd,
  SiPostman,
  SiIntellijidea,
  SiGit,
  SiGithub,
  SiTrello,
  SiJira,
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaClipboardList,
  FaDrawPolygon,
  FaNetworkWired,
  FaDatabase,
}

export default function AnimatedSkillChip({ skill, category }) {
  const { name, iconKey } = skill
  const IconComp = ICONS[iconKey] || FaTools

  // determine accent by category
  const accent = ['Technologies', 'Frontend', 'Programming', 'Stack'].includes(category) ? 'from-[#a78bfa] to-[#7c5cff]' : 'from-[#64ffda] to-[#3ef0c8]'

  return (
    <motion.button
      layout
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center gap-3 rounded-xl border border-transparent bg-white/3 px-3 py-2 backdrop-blur-sm transition-shadow focus:outline-none`}
      aria-label={name}
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 shadow-inner">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`} />
        <IconComp className="z-10 h-5 w-5 text-white/90 transition group-hover:scale-110 group-hover:drop-shadow-[0_6px_20px_rgba(167,139,250,0.6)]" aria-hidden="true" />
      </div>

      <div className="flex flex-col items-start">
        <span className="text-xs font-semibold text-[#e6f1ff]">{name}</span>
      </div>
    </motion.button>
  )
}
