export const profile = {
  name: 'Youssef ELHOUBI',
  title: 'Full Stack Developer',
  phone: '+212 635562352',
  email: 'elhoubiyoussef@gmail.com',
  linkedin: {
    label: 'youssef elhoubi',
    url: 'https://www.linkedin.com/in/youssef-elhoubi',
  },
  github: {
    label: 'youssefelhoubi',
    url: 'https://github.com/youssefelhoubi',
  },
  shortBio:
    'I design and build scalable web applications with strong product thinking, clean architecture, and a focus on real-world performance.',
  about:
    'Full Stack Developer with hands-on experience delivering modern frontend and backend systems. I enjoy turning complex business requirements into elegant digital experiences, building APIs that scale, and collaborating in agile teams to ship high-impact products.',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Intermediate' },
    { name: 'English', level: 'Bilingual' },
  ],
  interests: ['Photography', 'Travel', 'Sports'],
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  { category: 'Stack', items: ['MERN', 'LAMP'] },
  { category: 'Programming', items: ['Web', 'Mobile Web'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Design Patterns', items: ['MVC', 'SOA'] },
  { category: 'Methodologies', items: ['Merise', 'UML'] },
  {
    category: 'Technologies',
    items: [
      'JS',
      'TS',
      'React',
      'ExpressJS',
      'Next.js',
      'Laravel',
      'Svelte',
      'Java',
      'Spring',
    ],
  },
  {
    category: 'Software',
    items: ['VS Code', 'Figma', 'Adobe XD', 'Postman', 'IntelliJ'],
  },
  { category: 'Version Control', items: ['Git', 'GitHub'] },
  {
    category: 'Project Management',
    items: ['Trello', 'Jira', 'GitHub Projects'],
  },
]

export const experiences = [
  {
    role: 'Internship - Full Stack Developer',
    company: 'skoolution',
    period: 'June 2025 - August 2025',
    summary:
      'Built a smart web app for high school science students to test, track and evaluate academic progress via weekly assessments and personalized dashboards.',
    tech: ['Next.js', 'NestJS', 'MongoDB'],
  },
]

export const projects = [
  {
    name: 'Covvee',
    description:
      'Collaborative cloud-native web code editor with real-time collaboration, secure code execution, and an integrated developer experience. Includes Monaco editor, WebSockets-driven sessions, and containerized execution for safe previews.',
    stack: ['Java', 'Spring Boot', 'React', 'Monaco Editor', 'WebSockets', 'Docker'],
    githubUrl: 'https://github.com/youssefelhoubi/covvee',
    liveUrl: '#',
    image: 'https://placehold.co/600x400/1e293b/64ffda?text=Covvee',
  },
  {
    name: 'My Appointment Schedule (MAS)',
    description:
      'Booking and appointment management app with multiple service providers.',
    stack: [
      'React.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'CSS',
      'Sass',
      'Tailwind CSS',
      'Bootstrap',
    ],
    githubUrl: 'https://github.com/youssefelhoubi/mas',
    liveUrl: '#',
    image: 'https://placehold.co/600x400/1e293b/64ffda?text=MAS',
  },
  {
    name: 'Track My Prices (TMP)',
    description: 'E-commerce price tracking and monitoring web app.',
    stack: [
      'React.js',
      'Laravel',
      'PostgreSQL',
      'CSS',
      'Sass',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/youssefelhoubi/tmp',
    liveUrl: '#',
    image: 'https://placehold.co/600x400/1e293b/64ffda?text=TMP',
  },
]

export const education = [
  {
    program: 'Web & Mobile Development',
    institution: 'Youcode (UM6P/Simplon)',
    period: '2024-2026',
    location: 'Safi, Morocco',
  },
  {
    program: 'Web & Mobile Development',
    institution: 'Simplon Maghreb / Talent 4Startups',
    period: '2024-2025',
    location: 'Casablanca, Morocco',
  },
  {
    program: 'Web & Mobile Development',
    institution: 'Youcode Bootcamp (Simplon)',
    period: '2024',
    location: 'Safi, Morocco',
  },
  {
    program: 'Web & Mobile Web Development',
    institution: 'WYKEE SOLUTION',
    period: '2023-2024',
    location: 'Safi, Morocco',
  },
]

export const certifications = [
  {
    category: 'Stack',
    items: [
      { name: 'MERN', iconKey: 'SiMongodb' },
      { name: 'LAMP', iconKey: 'SiApache' },
    ],
  },
  {
    category: 'Programming',
    items: [
      { name: 'Web', iconKey: 'FaLaptopCode' },
      { name: 'Mobile Web', iconKey: 'FaMobileAlt' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', iconKey: 'SiMysql' },
      { name: 'PostgreSQL', iconKey: 'SiPostgresql' },
      { name: 'MongoDB', iconKey: 'SiMongodb' },
    ],
  },
  {
    category: 'Design Patterns',
    items: [
      { name: 'MVC', iconKey: 'FaProjectDiagram' },
      { name: 'SOA', iconKey: 'FaProjectDiagram' },
    ],
  },
  {
    category: 'Methodologies',
    items: [
      { name: 'Merise', iconKey: 'FaClipboardList' },
      { name: 'UML', iconKey: 'FaDrawPolygon' },
    ],
  },
  {
    category: 'Technologies',
    items: [
      { name: 'JS', iconKey: 'SiJavascript' },
      { name: 'TS', iconKey: 'SiTypescript' },
      { name: 'React', iconKey: 'SiReact' },
      { name: 'ExpressJS', iconKey: 'SiExpress' },
      { name: 'Next.js', iconKey: 'SiNextdotjs' },
      { name: 'NestJS', iconKey: 'SiNestjs' },
      { name: 'PHP', iconKey: 'SiPhp' },
      { name: 'Laravel', iconKey: 'SiLaravel' },
      { name: 'REST API', iconKey: 'FaNetworkWired' },
      { name: 'SASS', iconKey: 'SiSass' },
      { name: 'Bootstrap', iconKey: 'SiBootstrap' },
      { name: 'Tailwind CSS', iconKey: 'SiTailwindcss' },
      { name: 'Svelte', iconKey: 'SiSvelte' },
      { name: 'Java', iconKey: 'SiJava' },
      { name: 'Spring', iconKey: 'SiSpring' },
      { name: 'WebSockets', iconKey: 'SiWebsocket' },
      { name: 'Docker', iconKey: 'SiDocker' },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'VS Code', iconKey: 'SiVisualstudiocode' },
      { name: 'Figma', iconKey: 'SiFigma' },
      { name: 'Adobe XD', iconKey: 'SiAdobexd' },
      { name: 'Postman', iconKey: 'SiPostman' },
      { name: 'IntelliJ', iconKey: 'SiIntellijidea' },
    ],
  },
  { category: 'Version Control', items: [ { name: 'Git', iconKey: 'SiGit' }, { name: 'GitHub', iconKey: 'SiGithub' } ] },
  {
    category: 'Project Management',
    items: [
      { name: 'Trello', iconKey: 'SiTrello' },
      { name: 'Jira', iconKey: 'SiJira' },
      { name: 'GitHub Projects', iconKey: 'SiGithub' },
    ],
  }
]