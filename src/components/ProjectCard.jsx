import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, onClick }) {
  const base = import.meta.env.BASE_URL
  const imgSrc = base + (project.imgs?.[0] || '/img/projects/placeholder.svg').replace(/^\//, '')

  const handleImgError = (e) => {
    e.target.src = base + 'img/projects/placeholder.svg'
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imgSrc}
          alt={project.title}
          onError={handleImgError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.ref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
              >
                {link.name.toLowerCase().includes('source') || link.name.toLowerCase().includes('github') ? (
                  <Github size={16} className="text-gray-700" />
                ) : (
                  <ExternalLink size={16} className="text-gray-700" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500 font-medium">{project.year}</span>
          {project.inProgress && (
            <span className="status-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              In Progress
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="skill-badge">+{project.skills.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
