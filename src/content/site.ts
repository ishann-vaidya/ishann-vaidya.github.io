export const site = {
  name: 'Ishan Vaidya',
  role: 'Information Technology Student',
  tagline:
    'Building thoughtful software at the intersection of machine learning, backend systems, and real-world impact.',
  heroSupporting:
    'I design offline-first AI tools and full-stack web apps—grounded in clean engineering, data discipline, and strong fundamentals in DSA and system design.',
  email: 'ishanvaidya2212@gmail.com',
  phone: '+91 7666970839',
  linkedin: 'https://www.linkedin.com/in/ishan-vaidya22/',
  github: 'https://github.com/ishann-vaidya',
  education: {
    school: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    degree: 'Bachelor of Engineering in Information Technology',
    honors: 'Honors in Data Science',
    graduation: 'Expected May 2027',
  },
  about: {
    paragraphs: [
      'I am an IT undergraduate who cares as much about how software feels to build as how it performs in production. My work spans local AI for documents—embeddings, summarization, and structure-aware PDF parsing—and robust Flask backends supported by carefully normalized MySQL schemas.',
      'Alongside this, I am consistently strengthening my problem-solving skills through Data Structures and Algorithms, currently maintaining a 60+ day streak on GeeksforGeeks. I am not a pro yet, but I am deliberately working toward that level with disciplined practice.',
      'Hackathons and campus leadership keep me close to problems that matter—fast iteration, clear communication under pressure, and shipping solutions people can actually use. I am currently deepening my end-to-end ML practice, backend design, and deployment discipline.',
      'Whether it’s ranking the right sections of a PDF or modeling flights and crews in a reservation system, I aim for clarity, maintainability, and measurable impact.'
    ],
    focus: [
      'Offline & privacy-conscious AI',
      'Python backends and relational data modeling',
      'ML pipelines with scikit-learn and evaluation rigor',
      'Data Structures & Algorithms'
    ],
  },
  skills: [
    {
      title: 'Languages',
      items: ['Python', 'Java', 'C', 'C++', 'SQL'],
    },
    {
      title: 'Web & Backend',
      items: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL'],
    },
    {
      title: 'Machine Learning & Data Science',
      items: [
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'Matplotlib',
        'Seaborn',
        'Embeddings',
        'Model evaluation',
      ],
    },
    {
      title: 'Tools & Design',
      items: ['Docker', 'Git', 'GitHub', 'Figma', 'Canva'],
    },
    {
      title: 'Leadership & Communication',
      items: [
        'Leadership',
        'Event coordination',
        'Public speaking',
        'Problem-solving',
        'Time management',
      ],
    },
  ],
  projects: [
    {
      title: 'Intelligent Document Analyzer',
      year: '2025',
      badge: 'Offline PDF AI',
      problem:
        'Long PDFs are slow to navigate; cloud APIs are not always available or desirable.',
      solution:
        'An offline analyzer that parses PDF structure, detects headings with font and layout heuristics, embeds chunks with bge-small, scores relevance to a user role and task, and summarizes top sections with phi-2 via Ollama.',
      impact:
        'CPU-only, Docker-packaged workflow for air-gapped or low-resource environments—ideal for hackathons, research, and sensitive documents.',
      stack: ['Python', 'Flask', 'Docker', 'bge-small', 'phi-2', 'PyMuPDF'],
      links: [
        { label: 'GitHub', href: 'https://github.com/ishann-vaidya/Devgenix_1B' },
      ],
    },
    {
      title: 'Airline Reservation System',
      year: '2025',
      badge: 'Web application',
      problem:
        'Airline operations need a clear separation between passengers, admins, and crew with consistent data integrity.',
      solution:
        'A Flask and MySQL application with role-based modules for booking, cancellations, crew assignment, and flight management, plus a normalized schema and SQL artifacts with ER documentation.',
      impact:
        'Demonstrates scalable backend structure and a responsive UI suitable for coursework and portfolio review.',
      stack: ['Flask', 'MySQL', 'HTML', 'CSS', 'Python'],
      links: [
        { label: 'GitHub', href: 'https://github.com/ishann-vaidya/DBMS-MiniProject' },
      ],
    },
  ],
  achievements: [
    {
      title: 'Winner — Best Solution to Problem Statement',
      org: 'InnovateYou Techathon 3.0 · AISSMS, Pune',
      date: '2026',
      detail:
        'National 24-hour hackathon; top placement for a healthcare-oriented solution. Award included ₹10,000, trophy, and certificates.',
    },
    {
      title: 'Finalist',
      org: 'Udyamotsav · AICTE & MoE Innovation Cell, MIT-WPU',
      date: '2025',
      detail: 'All three startup ideas shortlisted from 10,000+ registrations.',
    },
    {
      title: 'Finalist — Safe & Trusted AI track',
      org: 'TrustAI Ideathon · IIIT Pune (AI Impact Summit 2026 pre-summit)',
      date: '2026',
      detail: 'Top 20 among 600+ national teams.',
    },
    {
      title: 'National Representative',
      org: 'National Techno Exhibition · Dr. Ambedkar Institute of Technology, Bangalore',
      date: '2025',
      detail: 'Presented concept-stage startup ideas.',
    },
    {
      title: 'Runner-up (3rd place)',
      org: 'BITBLAZE · Bharati Vidyapeeth, Pune',
      date: '2025',
      detail: '',
    },
    {
      title: 'Cleared first round',
      org: 'Adobe Hackathon',
      date: '2025',
      detail: '',
    },
    {
      title: 'Qualified college-level selection',
      org: 'Smart India Hackathon',
      date: '2024',
      detail: '',
    },
  ],
  campus: [
    {
      title: 'Entrepreneurship Development Cell & IIC',
      role: 'Secretary (2026–Present); Member (2025–2026)',
      org: 'PES Modern College of Engineering, Pune',
      detail:
        'Event coordination, startup mentoring, and innovation initiatives across campus.',
    },
    {
      title: 'Google Developer Students Club',
      role: 'Member, AI & ML Team',
      org: 'PES Modern College of Engineering, Pune',
      date: '2025–Present',
      detail: '',
    },
    {
      title: 'MPulse — Annual College Fest',
      role: 'Event Coordinator',
      org: 'PES Modern College of Engineering, Pune',
      date: '2026',
      detail:
        'Logistics, team coordination, and execution of a semi-technical event with strong engagement.',
    },
  ],
} as const
