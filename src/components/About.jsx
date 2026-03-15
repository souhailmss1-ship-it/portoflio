import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Target, Sparkles } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-text-primary">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Decorative Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-8 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                    <User size={24} className="text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Souhail</h3>
                    <p className="text-text-muted text-sm">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <Target size={24} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Goal-Driven</h3>
                    <p className="text-text-muted text-sm">Building impactful projects</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center">
                    <Sparkles size={24} className="text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Passionate Learner</h3>
                    <p className="text-text-muted text-sm">Always exploring new technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-cyan/5 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent-purple/5 blur-xl" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a dedicated <span className="text-text-primary font-semibold">full-stack developer</span> with
              a growing passion for <span className="text-text-primary font-semibold">AI and machine learning</span>.
              From building clean, scalable web applications to exploring the power of large language models
              and neural networks, I turn complex problems into elegant solutions.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm currently diving deep into <span className="text-accent-cyan font-semibold">LLMs, neural networks, and data analytics</span>,
              constantly pushing myself to learn and build more. I thrive in collaborative
              environments and am passionate about writing clean, maintainable code that
              makes a real impact.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              When I'm not coding, you'll find me training models, analyzing data patterns,
              contributing to open-source projects, and staying up-to-date with the latest
              trends in AI and web development.
            </p>

            <motion.a
              href="mailto:souhailmss1@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold text-sm mt-4"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
