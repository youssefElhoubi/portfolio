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
      'NestJS',
      'PHP',
      'Laravel',
      'REST API',
      'SASS',
      'Bootstrap',
      'Tailwind CSS',
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
    githubUrl: 'https://github.com/youssefelhoubi',
    liveUrl: '#',
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
    githubUrl: 'https://github.com/youssefelhoubi',
    liveUrl: '#',
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
    title: 'OCI (Oracle) DevOps Professional',
    year: '2025',
    issuer: 'Oracle',
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    year: '2025',
    issuer: 'IBM (Coursera)',
  },
  {
    title: 'Introduction to Programming with C#',
    year: '2025',
    issuer: 'Microsoft (Coursera)',
  },
  {
    title:
      'Java EE Web Development: HTTP, Server, Servlet, HTML/CSS, JSP',
    year: 'N/A',
    issuer: 'Andrii Piatakha (Udemy)',
  },
]