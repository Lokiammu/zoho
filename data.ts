import { Project, Experience, Skill, Achievement, Certification } from './types';

export const RESUME_DATA = {
  name: "Lokesh Narne",
  tagline: "AI/ML Engineer & Full Stack Developer",
  contact: {
    email: "lokeshnarne2005@gmail.com",
    phone: "+91-9441636402",
    location: "Vijayawada, India",
    linkedin: "linkedin.com/in/lokeshnarne", 
    github: "github.com/lokeshnarne", 
  },
  summary: "Results-driven AI/ML Engineer with proven expertise in developing scalable intelligent systems that solve real-world problems. Demonstrated ability to increase operational efficiency by 40%+ through automation solutions. Skilled in full-stack development (MERN, React), cloud architecture (AWS), and advanced AI frameworks. Strong track record of winning 8+ hackathons.",
  stats: {
    experienceYears: 1.5,
    projectsCompleted: 12,
    hackathonsWon: 8,
    certifications: 5
  },
  skills: [
    { category: "Languages", items: ["Python", "C++", "C", "HTML5", "CSS3", "JavaScript", "TypeScript", "Dart"] },
    { category: "AI/ML", items: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain", "YOLO", "NLP", "HuggingFace", "Ollama"] },
    { category: "Web & Mobile", items: ["React.js", "Next.js", "Flutter", "Node.js", "Express.js", "Tailwind CSS"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Docker", "Git", "N8N"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] }
  ] as Skill[],
  experience: [
    {
      id: "exp1",
      role: "Flutter Developer Intern",
      company: "Astragen Pvt. Ltd.",
      period: "March 2025 – May 2025",
      description: [
        "Built Creative Box plugin serving 10,000+ students across 3 platforms, increasing engagement by 35%.",
        "Achieved 100% cross-platform compatibility with 5-year backward support.",
        "Reduced future development time by 50% through modular architecture."
      ]
    },
    {
      id: "exp2",
      role: "Web Developer Intern",
      company: "Avantel Private Limited",
      period: "April 2024 – March 2025",
      description: [
        "Led end-to-end CRM development using MERN stack, supporting 500+ daily users.",
        "Reduced data processing time by 45% via optimized query structures.",
        "Integrated RASA chatbot automating 70% of user queries."
      ]
    },
    {
      id: "exp3",
      role: "Intelligent Automation Virtual Intern",
      company: "Blue Prism",
      period: "January 2024 – March 2024",
      description: [
        "Identified 15+ automation opportunities projecting 30% efficiency improvement.",
        "Optimized 5 critical business processes through automation frameworks.",
        "Earned Blue Prism certification."
      ]
    }
  ] as Experience[],
  projects: [
    {
      id: "proj1",
      title: "Saraswath AI - LMS Portal",
      category: "AI/ML",
      date: "Mar 2025",
      featured: true,
      description: "Intelligent LMS using RAG models and fine-tuned Llama 3.2.",
      fullDescription: "Designed an intelligent Learning Management System (LMS) utilizing RAG models and fine-tuned Llama 3.2 and Phi2. The system provides personalized study recommendations and context-aware responses.",
      techStack: ["Python", "Ollama", "Llama 3.2", "Phi2", "RAG"],
      impact: "Improved exam prep efficiency by 40% with 85% accuracy. Reduced study time by 25%.",
      imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "proj2",
      title: "Personal AI Assistant",
      category: "AI/ML",
      date: "Nov 2024",
      featured: true,
      description: "Voice-interactive AI companion using OpenAI Whisper and Gemma2.",
      fullDescription: "Created a voice-interactive AI companion capable of real-time query resolution across 100+ conversation topics. Supports 5+ languages with high comprehension rates.",
      techStack: ["Python", "Whisper", "Ollama", "Gemma2"],
      impact: "95% speech recognition accuracy. Sub-2-second response time.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
      id: "proj3",
      title: "Automated Issue Tagging",
      category: "AI/ML",
      date: "Oct 2024",
      featured: false,
      description: "Classification model processing 1,000+ daily tickets.",
      fullDescription: "Built a classification model using an ensemble approach (SVM, BERT, GPT-2) to tag customer support tickets automatically.",
      techStack: ["Python", "SVM", "BERT", "GPT-2"],
      impact: "92% accuracy across 15 categories. Reduced manual tagging time by 80%.",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "proj4",
      title: "Autonomous Laser Weeder",
      category: "IoT",
      date: "Aug 2024",
      featured: true,
      description: "Precision agriculture robot with YOLO v8.",
      fullDescription: "Led a 4-person team developing a robot for targeted laser weed elimination using real-time computer vision on Raspberry Pi.",
      techStack: ["Python", "YOLO v8", "Raspberry Pi"],
      impact: "95% weed detection accuracy. Reduced herbicide usage by 90%.",
      imageUrl: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop"
    },
    {
      id: "proj5",
      title: "AI-Powered Tobacco Grading",
      category: "AI/ML",
      date: "Apr 2024",
      featured: false,
      description: "Automated quality assessment with 94% accuracy.",
      fullDescription: "An automated system for grading tobacco leaves to eliminate human error and improve consistency.",
      techStack: ["Python", "YOLO"],
      impact: "Processed 500+ samples/hour. Reduced inspection time by 75%.",
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop"
    }
  ] as Project[],
  achievements: [
    { title: "1st Place", event: "Saraswath AI Hackathon", date: "April 2025" },
    { title: "1st Place", event: "AI Hackathon SAHE", date: "Jan 2025" },
    { title: "Best Paper Award", event: "Automated Medical Support System", date: "2025" },
    { title: "5th Place", event: "Techxcelerate BITS Pilani", date: "Nov 2024" }
  ] as Achievement[],
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Blue Prism Certified Developer (RPA)",
    "Salesforce Agentforce",
    "Advanced Programming in C++ (Cisco)",
    "DBMS and MySQL (Udemy)"
  ]
};