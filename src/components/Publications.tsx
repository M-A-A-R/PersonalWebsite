// Simple list — title (link) + journal, year
import { publications } from '../data'

export default function Publications() {
  return (
    <section id="publications" className="text-left">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Publications</h2>
      <ul className="space-y-3">
        {publications.map((pub, i) => (
          <li key={i}>
            {pub.link ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-green hover:underline"
              >
                {pub.title}
              </a>
            ) : (
              <span className="text-gray-900">{pub.title}</span>
            )}
            <span className="text-gray-600 text-sm"> — {pub.journal}, {pub.year}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
