import { motion } from 'framer-motion'
import { Linkedin, Github, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Interested in collaborating on AI/ML projects or building agentic systems?
            Let's connect.
          </p>
          <p className="text-gray-500 text-sm mb-8 flex items-center justify-center gap-2">
            <MapPin size={16} /> Colombo, Sri Lanka
          </p>

          <a
            href="https://www.linkedin.com/in/hasindu-madushan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-primary-600 hover:bg-primary-700 text-lg px-8 py-4"
          >
            Connect on LinkedIn
          </a>

          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://www.linkedin.com/in/hasindu-madushan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/hasindu-madushan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Hasindu Madushan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
