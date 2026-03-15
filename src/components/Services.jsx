import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, BarChart3, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description:
      'Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Tailwind CSS. Clean code, fast load times, and seamless user experiences.',
    icon: Code,
    gradient: 'from-accent-cyan to-accent-blue',
    shadowColor: 'shadow-accent-cyan/20',
  },
  {
    title: 'Data Analytics',
    description:
      'Turning raw data into actionable insights. Exploratory analysis, data cleaning, visualization, and reporting using Python, Pandas, and Jupyter Notebooks to drive smart decisions.',
    icon: BarChart3,
    gradient: 'from-accent-purple to-accent-pink',
    shadowColor: 'shadow-accent-purple/20',
  },
  {
    title: 'AI & ML Models',
    description:
      'Building and training machine learning models and neural networks with PyTorch. From sentiment analysis to image classification — turning data into intelligent solutions.',
    icon: BrainCircuit,
    gradient: 'from-accent-gold to-orange-500',
    shadowColor: 'shadow-accent-gold/20',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-widest uppercase">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-text-primary">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Comprehensive development solutions tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className={`group relative glass rounded-2xl p-8 border border-glass-border hover:border-transparent
                  hover:${service.shadowColor} hover:shadow-2xl transition-all duration-500 cursor-default`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6
                  group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-1/2 bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
