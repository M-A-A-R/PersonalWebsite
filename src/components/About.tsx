// Bio with green accent words (reference style). Left-aligned in narrow column.
import type { ReactNode } from 'react'
import { personal } from '../data'

/** Escapes special regex characters so we can safely use a string in RegExp. */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Splits text by accent words; matched phrases are wrapped in green spans (case-insensitive). */
function withAccentsSimple(text: string, words: string[]): (string | ReactNode)[] {
  if (words.length === 0) return [text]
  const sorted = [...words].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${sorted.map(escapeRegex).join('|')})`, 'gi')
  const segments = text.split(pattern)
  return segments.map((seg, i) => {
    const match = sorted.find((w) => w.toLowerCase() === seg.toLowerCase())
    return match ? <span key={`${i}-${seg}`} className="text-forest-600 font-medium">{seg}</span> : seg
  })
}

export default function About() {
  const words = personal.accentWords ?? []
  const bioWithAccents = withAccentsSimple(personal.bio, words)

  return (
    <section id="about" className="text-left">
      <p className="text-gray-800 leading-relaxed mb-4">
        {bioWithAccents}
      </p>
      <p className="text-gray-600 text-sm">
        Other interests: {personal.interests}.
      </p>
    </section>
  )
}
