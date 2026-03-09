// Simple list — Project name (link) + one-line description. Eric Mao style.
import { projects } from '../data'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Some cool projects:</h2>
      <ul className="space-y-6">
        {projects.map((proj, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex items-start gap-2">
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-600 hover:underline font-medium inline-flex items-center gap-1"
                >
                  {proj.name}
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span className="font-medium text-gray-900">{proj.name}</span>
              )}
            </div>
            <p className="text-gray-600 text-sm sm:text-right sm:max-w-[60%]">{proj.line}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
