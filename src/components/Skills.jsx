import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Database, Palette, GitBranch,
  Terminal, Layers, Cpu, Figma, Boxes, BrainCircuit, BarChart3, Flame, BookOpen, Zap, Server,
  Bot, Search, MessageSquare, Settings2, Activity, Network
} from 'lucide-react';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
      { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
      { name: 'TypeScript', icon: Boxes, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
      { name: 'HTML/CSS', icon: Palette, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
      { name: 'Tailwind CSS', icon: Layers, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: Cpu, color: 'text-yellow-300', bg: 'bg-yellow-300/10', border: 'border-yellow-300/20' },
      { name: 'Django', icon: Server, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
      { name: 'FastAPI', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: GitBranch, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
      { name: 'Database', icon: Database, color: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20' },
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'LLM Applications', icon: Bot, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
      { name: 'RAG', icon: Search, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
      { name: 'Prompt Engineering', icon: MessageSquare, color: 'text-yellow-300', bg: 'bg-yellow-300/10', border: 'border-yellow-300/20' },
      { name: 'Embeddings', icon: Layers, color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
      { name: 'Fine-tuning', icon: Settings2, color: 'text-accent-pink', bg: 'bg-accent-pink/10', border: 'border-accent-pink/20' },
      { name: 'Neural Networks', icon: Network, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
    ]
  }
];

function SkillCard({ skill, index, isInView }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`group relative glass rounded-xl p-4 flex flex-col items-center gap-2 cursor-default
        border ${skill.border} hover:border-opacity-60 transition-all duration-300`}
    >
      <div className={`absolute inset-0 rounded-xl ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`relative z-10 w-10 h-10 rounded-lg ${skill.bg} flex items-center justify-center transition-transform duration-300`}>
        <Icon size={20} className={`${skill.color} transition-all duration-300`} />
      </div>
      <span className="relative z-10 text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-semibold tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-text-primary">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Organized across my core areas of specialization.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gradient-to-r from-accent-purple to-transparent opacity-50" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={i + (catIdx * 5)} 
                    isInView={isInView} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
