// Photography section: images from src/photos/, drag-to-reorder, order saved in localStorage.
import { useState, useCallback } from 'react'
import { getOrderedPhotos, savePhotoOrder } from '../photoData'

type PhotoEntry = { path: string; url: string }

export default function Photography() {
  // Initial order comes from getOrderedPhotos() (saved order or default).
  const [photos, setPhotos] = useState<PhotoEntry[]>(() => getOrderedPhotos())
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDragOverIndex(index)
  }, [])

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent, dropIndex: number) => {
      e.preventDefault()
      setDragOverIndex(null)
      const fromIndex = draggedIndex
      if (fromIndex == null || fromIndex === dropIndex) return
      const next = [...photos]
      const [removed] = next.splice(fromIndex, 1)
      next.splice(dropIndex, 0, removed)
      setPhotos(next)
      savePhotoOrder(next.map((p) => p.path))
      setDraggedIndex(null)
    },
    [photos, draggedIndex]
  )

  if (photos.length === 0) return null

  return (
    <section id="photography" className="text-left">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Photography</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((entry, i) => (
          <div
            key={entry.path}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, i)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, i)}
            className={`
              aspect-square rounded overflow-hidden cursor-grab active:cursor-grabbing
              border-2 transition-colors
              ${draggedIndex === i ? 'opacity-50 border-forest-500' : ''}
              ${dragOverIndex === i && draggedIndex !== i ? 'border-forest-400 bg-forest-50' : 'border-transparent'}
            `}
          >
            <div className="w-full h-full bg-gray-200 rounded overflow-hidden">
              <img
                src={entry.url}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
