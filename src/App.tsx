import Landing from './components/Landing'

export default function App() {
  return (
    <div className="min-h-screen bg-page text-body">
      <main className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 sm:py-28">
        <div className="w-full max-w-[36rem]">
          <Landing />
        </div>
      </main>
    </div>
  )
}
