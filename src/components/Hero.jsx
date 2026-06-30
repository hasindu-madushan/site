import { motion } from 'framer-motion'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { ArrowDown, MapPin, Github, Linkedin } from 'lucide-react'

const techStack = [
  'Python', 'LangChain', 'LangGraph', 'PyTorch', 'TensorFlow',
  'FastAPI', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL',
  'Elasticsearch', 'Apache Kafka', 'Hugging Face', 'OpenCV',
  'LLM Fine-tuning', 'RAG', 'Agentic AI', 'TypeScript',
]

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 600 } },
            color: { value: ['#14b8a6', '#0d9488', '#0f766e', '#2dd4bf'] },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: { enable: true, minimumValue: 0.4 } },
            size: { value: { min: 2, max: 5 }, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0"
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-200 shadow-2xl shadow-primary-100">
              <img
                src={`${import.meta.env.BASE_URL}img/profile-pic-1.png?v=2`}
                alt="Hasindu Madushan"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#projects" className="absolute -top-1 -left-1 w-14 h-14 bg-white border-2 border-primary-300 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 hover:scale-110 transition-all duration-300">
              <span className="text-primary-600 text-[10px] font-bold text-center leading-tight px-0.5">View My Work</span>
            </a>
            <a href="#contact" className="absolute -bottom-1 -left-1 w-14 h-14 bg-white border-2 border-primary-300 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 hover:scale-110 transition-all duration-300">
              <span className="text-primary-600 text-[10px] font-bold text-center leading-tight px-0.5">Get In Touch</span>
            </a>
            <a href="https://github.com/hasindu-madushan" target="_blank" rel="noopener noreferrer" className="absolute -top-1 -right-1 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:border-primary-300 hover:scale-110 transition-all duration-300">
              <Github size={18} className="text-gray-700" />
            </a>
            <a href="https://linkedin.com/in/hasindu-madushan" target="_blank" rel="noopener noreferrer" className="absolute -bottom-1 -right-1 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:border-primary-300 hover:scale-110 transition-all duration-300">
              <Linkedin size={18} className="text-gray-700" />
            </a>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary-600 font-semibold mb-2 text-sm flex items-center justify-center lg:justify-start gap-1">
                <MapPin size={14} /> Colombo, Sri Lanka
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Hasindu
                <span className="block text-primary-600">Madushan</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-3 font-medium">
                Senior Software Engineer — AI & ML
              </p>
              {/* <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
                Building production LLM and agentic AI systems. 4+ years in AI engineering.
              </p> */}

              {/* <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4 bg-gradient-to-r from-white via-gray-50 to-white">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="mx-6 px-4 py-2 bg-white rounded-full text-xs font-normal text-gray-400 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-primary-600 transition-colors"
      >
        <ArrowDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
