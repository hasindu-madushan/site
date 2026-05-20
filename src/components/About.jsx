import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Cloud, Code2, Layers } from 'lucide-react'

const skills = [
  {
    icon: Brain,
    title: 'AI / ML',
    desc: 'Agentic AI systems, RAG / Graph RAG, LLM fine-tuning (LoRA, Quantisation), ANN, CNN, RNN, LSTM, Reinforcement learning, NLP, Computer vision (YOLO, OpenCV).',
  },
  {
    icon: Code2,
    title: 'Core Engineering',
    desc: 'Python, TypeScript, Java, C++, Rust. LangChain, LangGraph, FastAPI. Prompt engineering, multi-agent systems, full ML lifecycle.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, Docker, Kubernetes, CI/CD. Event-driven architecture with Apache Kafka. Production deployment and MLOps.',
  },
  {
    icon: Database,
    title: 'Data & Storage',
    desc: 'PostgreSQL, Vector DBs, Graph DBs, MongoDB, Elasticsearch. Data processing pipelines, SQL, large-scale data retrieval.',
  },
  {
    icon: Layers,
    title: 'Frameworks & Tools',
    desc: 'PyTorch, TensorFlow, Scikit-learn, Hugging Face Transformers. OpenCV, NumPy, Pandas, Matplotlib.',
  },
  {
    icon: Cpu,
    title: 'Other Expertise',
    desc: 'Unity game development, 3D modeling (Blender), OpenGL/C++ rendering, mobile app development (Android), game AI.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed"
        >
          Senior AI Engineer with 4+ years building production LLM and agentic AI systems.
          Delivered an AI chatbot that drove 50+ direct hotel bookings, cut SQL agent generation time by 50%,
          and led fine-tuning of a Llama 7B model to 80% accuracy over 50 intent classes.
          Specialises in multi-agent systems, LLM fine-tuning, prompt optimisation, and full ML lifecycle
          from data processing to production deployment. B.Sc. Computer Engineering from University of Peradeniya.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 mb-8"
        >
          Skills & Expertise
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 rounded-xl border-2 border-gray-200 bg-white shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="text-primary-700" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
