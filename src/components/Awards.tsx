// Simple list — one line per award
import { awards } from '../data'

export default function Awards() {
  return (
    <section id="awards" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Awards</h2>
      <ul className="space-y-2">
        {awards.map((award, i) => (
          <li key={i} className="text-gray-600 text-sm">{award}</li>
        ))}
      </ul>
    </section>
  )
}
