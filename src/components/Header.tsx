// Minimal intro line (reference style). Left-aligned in column.
import { personal } from '../data'

export default function Header() {
  return (
    <div className="text-left">
      <p className="text-gray-600 text-sm">{personal.role}</p>
      <p className="text-gray-500 text-sm mt-0.5">{personal.tagline}</p>
    </div>
  )
}
