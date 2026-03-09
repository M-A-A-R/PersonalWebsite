// Minimal contact: icon row + optional footer line (reference style).
import { personal } from '../data'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="text-left pt-2 border-t border-gray-200/80">
      <div className="flex items-center gap-4 text-gray-500">
        <a
          href={personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-forest-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
        <a
          href={personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-forest-600 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} strokeWidth={1.5} />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="hover:text-forest-600 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} strokeWidth={1.5} />
        </a>
      </div>
      <p className="text-gray-500 text-xs mt-3">{personal.location}</p>
    </footer>
  )
}
