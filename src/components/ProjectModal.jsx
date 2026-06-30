import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const base = import.meta.env.BASE_URL

  const imgs = (project.imgs?.length ? project.imgs : ['/img/projects/placeholder.svg']).map(
    (p) => base + p.replace(/^\//, '')
  )
  const nextImg = () => setActiveImg((prev) => (prev + 1) % imgs.length)
  const prevImg = () => setActiveImg((prev) => (prev - 1 + imgs.length) % imgs.length)

  const handleImgError = (e) => {
    e.target.src = base + 'img/projects/placeholder.svg'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <span className="text-sm text-gray-500 font-medium">{project.year}</span>
              {project.inProgress && (
                <span className="status-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  In Progress
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {imgs.length > 0 && (
            <div className="relative aspect-video bg-gray-100">
              <motion.img
                key={activeImg}
                src={imgs[activeImg]}
                alt={project.title}
                onError={handleImgError}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full object-contain"
              />
              {imgs.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white shadow-lg transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white shadow-lg transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          )}

          {imgs.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeImg ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" onError={handleImgError} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="p-6 space-y-6">
            <p className="text-gray-700 leading-relaxed">{project.desc}</p>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Links
                </h3>
                <div className="space-y-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {link.name.toLowerCase().includes('source') || link.name.toLowerCase().includes('github') ? (
                        <Github size={18} className="text-gray-600" />
                      ) : (
                        <ExternalLink size={18} className="text-gray-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{link.name}</p>
                        <p className="text-sm text-gray-500 truncate">{link.ref}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
