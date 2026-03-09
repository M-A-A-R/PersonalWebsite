import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Photography from './components/Photography'
import Contact from './components/Contact'

/** Which section is visible. Main = intro (header, about, contact); others show one section at a time. */
export type View = 'main' | 'experience' | 'publications' | 'photography'

export default function App() {
  const [view, setView] = useState<View>('main')

  const contentWidth = 'max-w-xl'
  return (
    <div className="min-h-screen bg-beige-100 text-gray-800 flex flex-col">
      {/* Narrow centered column (reference style); nav top-right, content left-aligned. */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 py-10">
        <div className={`w-full ${contentWidth} flex flex-col gap-10`}>
          <Navbar view={view} setView={setView} />
          {view === 'main' && (
            <>
              <Header />
              <About />
              <Contact />
            </>
          )}
          {view === 'experience' && <Experience />}
          {view === 'publications' && <Publications />}
          {view === 'photography' && <Photography />}
        </div>
      </main>
    </div>
  )
}
