import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#', hoverColor: 'hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/public-profile/settings', hoverColor: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:souhail@example.com', hoverColor: 'hover:text-accent-cyan' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer id="contact" className="relative pt-20 pb-8 px-6" ref={ref}>
      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <motion.a
            href="mailto:souhail@example.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-dark-900 font-semibold text-base"
          >
            <Mail size={18} />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-11 h-11 rounded-full glass flex items-center justify-center text-text-muted ${link.hoverColor} transition-colors duration-300`}
                aria-label={link.name}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-glass-border">
          <p className="text-text-muted text-sm flex items-center gap-1">
            © 2026 Souhail. Built with <Heart size={14} className="text-red-400" /> and React
          </p>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent-cyan transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
