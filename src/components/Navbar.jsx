import { navItems } from '../data'

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#64ffda]/15 bg-[#0a192f]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className="font-['JetBrains_Mono',monospace] text-sm uppercase tracking-[0.25em] text-[#64ffda]"
        >
          YE.dev
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-[#ccd6f6] transition hover:text-[#64ffda]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-[#64ffda]/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#64ffda] transition hover:bg-[#64ffda]/10"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar