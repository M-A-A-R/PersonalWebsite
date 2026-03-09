// Minimal nav: top-right of content column (reference style). Name + section links, right-aligned.
import { personal } from '../data'
import type { View } from '../App'

const navLinks: { label: string; view: View }[] = [
  { label: 'Experience', view: 'experience' },
  { label: 'Publications', view: 'publications' },
  { label: 'Photography', view: 'photography' },
]

type Props = { view: View; setView: (v: View) => void }

export default function Navbar({ view, setView }: Props) {
  return (
    <nav className="w-full flex items-center justify-center gap-6 flex-wrap">
      <button
        type="button"
        onClick={() => setView('main')}
        className="text-gray-800 hover:text-forest-600 transition-colors text-sm"
      >
        {personal.name}
      </button>
      {navLinks.map((link) => (
        <button
          key={link.view}
          type="button"
          onClick={() => setView(link.view)}
          className={`text-sm transition-colors ${
            view === link.view ? 'text-forest-600 font-medium' : 'text-gray-600 hover:text-forest-600'
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}
