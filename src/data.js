import { Brain, Lock, Zap, Database, Cloud, Terminal, Scale, Heart, MessageCircle, Activity, Briefcase } from 'lucide-react';

// Notice the 'export' keyword before 'const' - this is what was missing!
export const projects = [
  {
    title: "Legalweb App",
    description: "Find lawyers, schedule consultations, secure payments, and AI legal chatbot.",
    tags: ["Flutter", "Gemini API", "Firebase"],
    icon: Scale,
    color: "from-orange-500 to-orange-600",
    image: "/projects/legalweb.jpg"
  },
  {
    title: "Hope4Ever",
    description: "Hospital donation management platform for secure tracking and distribution.",
    tags: ["React", "Node.js", "AWS", "MySQL"],
    icon: Heart,
    color: "from-orange-600 to-orange-700",
    image: "/projects/hope4ever.jpg"
  },
  {
    title: "PeerPulse",
    description: "Dockerized anonymous feedback collection system with real-time analysis.",
    tags: ["React", "Go", "MongoDB", "Docker"],
    icon: MessageCircle,
    color: "from-orange-400 to-orange-500",
    image: "/projects/peerpulse.jpg"
  },
  {
    title: "Sport Center Inventory",
    description: "Equipment management system for Sabaragamuwa University Sports Center.",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    icon: Activity,
    color: "from-orange-500 to-orange-600",
    image: "/projects/sportcenter.jpg"
  },
  {
    title: "SkillMatch LK",
    description: "Connecting students with community digital projects for real-world experience.",
    tags: ["React", "Express.js", "Tailwind", "MySQL"],
    icon: Briefcase,
    color: "from-orange-600 to-orange-700",
    image: "/projects/skillmatch.jpg"
  }
];

export const achievements = [
  { year: "2025", title: "EXE2025", desc: "Flagship Game Dev Event - LEO Club, University of Colombo", icon: "🎮" },
  { year: "2024", title: "Hackventure 1.0 Finalist", desc: "Inter-University Datathon - University of Kelaniya", icon: "🏆" },
  { year: "2024", title: "PovertyHack", desc: "SLAAS in collaboration with OUSL and NASSL", icon: "💡" }
];

export const techStack = {
  "Languages": [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
  ],
  "Frameworks": [
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ],
  "Web Technologies": [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ],
  "Mobile Development": [
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
  ],
  "Database Management": [
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  "Design Tools": [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" }
  ],
  "Version Control": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ]
};

export const softSkills = [
  "Leadership & Team Collaboration",
  "Clear communication & presentations",
  "Problem Solving",
  "Critical Thinking",
  "Managing stakeholders",
  "Adaptability & Time Management",
  "Agile project management"
];

export const volunteering = [
  {
    role: "Secretary",
    organization: "Society of Computer Sciences",
    description: "Leading initiatives and organizing events for the computer science community."
  },
  {
    role: "ICARC Volunteer",
    organization: "Faculty of Computing - SUSL",
    description: "Supported the International Conference on Advanced Research in Computing."
  },
  {
    role: "STEMUP Volunteer",
    organization: "STEMUP Educational Foundation",
    description: "Empowering students through STEM education and mentorship programs."
  },
  {
    role: "Design Volunteer",
    organization: "IEEE branch of SUSL",
    description: "Creating visual assets and designs for IEEE student branch activities."
  }
];