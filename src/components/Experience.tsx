// Simple list — Role @ Company + one line. No dates, no bullets.
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="text-left">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
      <ul className="space-y-3">
        {experience.map((entry, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
            <div className="flex-1 min-w-0">
              {entry.link ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-green hover:underline"
                >
                  {entry.role} @ {entry.company}
                </a>
              ) : (
                <span className="font-medium text-gray-900">
                  {entry.role} @ {entry.company}
                </span>
              )}
              <p className="text-gray-600 text-sm mt-0.5">{entry.line}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
