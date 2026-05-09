import { profile } from '../data'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#64ffda]/10 bg-[#081426]/90 px-5 py-6 text-sm text-[#8ba3ca] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          © {currentYear} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="transition hover:text-[#64ffda]">
            Top
          </a>
          <a href="#projects" className="transition hover:text-[#64ffda]">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-[#64ffda]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer