import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Globe, Database, Palette, GitBranch,
  Terminal, Layers, Cpu, Figma, Boxes, BrainCircuit, BarChart3, Flame, BookOpen
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
  { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { name: 'TypeScript', icon: Boxes, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { name: 'Node.js', icon: Globe, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { name: 'Python', icon: Cpu, color: 'text-yellow-300', bg: 'bg-yellow-300/10', border: 'border-yellow-300/20' },
  { name: 'HTML/CSS', icon: Palette, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  { name: 'Tailwind CSS', icon: Layers, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
  { name: 'Git', icon: GitBranch, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
  { name: 'Database', icon: Database, color: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20' },
  { name: 'UI/UX', icon: Figma, color: 'text-accent-pink', bg: 'bg-accent-pink/10', border: 'border-accent-pink/20' },
  { name: 'LLMs', icon: BrainCircuit, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  { name: 'Neural Networks', icon: Cpu, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  { name: 'Data Analytics', icon: BarChart3, color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
  { name: 'PyTorch', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'Jupyter', icon: BookOpen, color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-semibold tracking-widest uppercase">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-text-primary">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            A curated set of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`group relative glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default
                  border ${skill.border} hover:border-opacity-60 transition-all duration-300`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`relative z-10 w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center transition-transform duration-300`}>
                  <Icon size={24} className={`${skill.color} transition-all duration-300`} />
                </div>
                <span className="relative z-10 text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
