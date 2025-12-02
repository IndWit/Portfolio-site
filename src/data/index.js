import { Brain, Lock, Zap, Database, Cloud, Terminal } from 'lucide-react';

export const projects = [
  {
    title: "Neural Network Optimizer",
    description: "ML-powered system that reduced training time by 60% using custom algorithms",
    tags: ["Python", "TensorFlow", "CUDA"],
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Quantum-Safe Encryption",
    description: "Post-quantum cryptographic solution for enterprise data protection",
    tags: ["Rust", "Cryptography", "C++"],
    icon: Lock,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Real-Time Analytics Engine",
    description: "Processes 50M events/sec with sub-millisecond latency",
    tags: ["Go", "Kafka", "ClickHouse"],
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Distributed Graph Database",
    description: "Sharded graph DB handling complex relationships at scale",
    tags: ["Java", "Neo4j", "Kubernetes"],
    icon: Database,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Edge Computing Platform",
    description: "IoT infrastructure managing 100K+ edge devices globally",
    tags: ["TypeScript", "WebAssembly", "Edge"],
    icon: Cloud,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "AI Code Review Assistant",
    description: "GPT-powered tool that caught 85% of bugs before production",
    tags: ["Python", "OpenAI", "React"],
    icon: Terminal,
    color: "from-red-500 to-pink-500"
  }
];

export const achievements = [
  { year: "2024", title: "Patent Pending", desc: "Novel approach to distributed consensus algorithms", icon: "🔬" },
  { year: "2023", title: "Tech Conference Speaker", desc: "Keynote at DevCon 2023 - 5000+ attendees", icon: "🎤" },
  { year: "2023", title: "Open Source Maintainer", desc: "Core contributor to 3 projects with 50K+ stars", icon: "⭐" },
  { year: "2022", title: "Hackathon Champion", desc: "1st place at Global AI Hackathon", icon: "🏆" }
];

export const techStack = {
  "Languages": ["TypeScript", "Python", "Go", "Rust", "C++"],
  "Backend": ["Node.js", "FastAPI", "gRPC", "GraphQL"],
  "Frontend": ["React", "Next.js", "Three.js", "WebGL"],
  "Cloud": ["AWS", "GCP", "Azure", "Terraform"],
  "Data": ["PostgreSQL", "Redis", "Kafka", "Elasticsearch"],
  "AI/ML": ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain"]
};