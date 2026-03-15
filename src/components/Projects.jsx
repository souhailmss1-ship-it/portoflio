import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with product catalog, cart functionality, user authentication, and payment processing integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    gradient: 'from-accent-cyan/20 to-accent-blue/20',
    accentColor: 'accent-cyan',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, drag-and-drop boards, and team workspace capabilities.',
    tags: ['React', 'Firebase', 'Tailwind', 'DnD'],
    github: '#',
    live: '#',
    gradient: 'from-accent-purple/20 to-accent-pink/20',
    accentColor: 'accent-purple',
  },
  {
    title: 'AI Chat Interface',
    description:
      'Modern chat application powered by AI with conversation history, markdown rendering, and streaming responses.',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma'],
    github: '#',
    live: '#',
    gradient: 'from-accent-gold/20 to-orange-500/20',
    accentColor: 'accent-gold',
  },
  {
    title: 'Portfolio Dashboard',
    description:
      'Analytics dashboard with interactive charts, data visualization, and real-time metric tracking for portfolio performance.',
    tags: ['React', 'D3.js', 'Python', 'REST API'],
    github: '#',
    live: '#',
    gradient: 'from-green-500/20 to-accent-cyan/20',
    accentColor: 'green-400',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-gold text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-text-primary">
            Featured <span className="gradient-text-gold">Projects</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative glass rounded-2xl overflow-hidden border border-glass-border hover:border-glass-border/50 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Folder size={20} className="text-text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="text-text-muted hover:text-text-primary transition-colors duration-300"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-text-muted hover:text-accent-cyan transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-dark-600/50 text-text-secondary border border-glass-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
