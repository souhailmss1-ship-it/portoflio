import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';

export default function Hero() {
  const name = "Souhail";
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/15 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -80, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue/10 blur-[80px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-text-secondary">Available for internships</span>
        </motion.div>

        {/* Animated Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none">
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block gradient-text"
              style={{ perspective: '500px' }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-text-secondary mb-6">
            <span className="text-text-primary font-semibold">Full-Stack Developer</span>
            <span className="mx-3 text-accent-cyan">•</span>
            <span>Creative Problem Solver</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, performant web applications with clean code and pixel-perfect design.
          Passionate about turning ideas into elegant digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-900 font-semibold text-base transition-all duration-300"
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-glass-border text-text-primary font-semibold text-base glass hover:border-accent-cyan/50 transition-all duration-300"
          >
            Contact Me
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
