// Small horizontal strip of 2–4 images (Eric Mao style)
import { photoGallery } from '../data'

export default function PhotoGallery() {
  if (!photoGallery.length) return null

  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <div className="flex gap-3">
        {/* First image larger */}
        <div className="flex-1 aspect-[4/3] bg-gray-200 rounded overflow-hidden">
          <img
            src={photoGallery[0]}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
              ;(e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden')
            }}
          />
          <div className="hidden w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Add image to /public/images/gallery-1.jpg
          </div>
        </div>
        {/* Smaller thumbnails */}
        <div className="flex flex-col gap-3 w-28">
          {photoGallery.slice(1, 3).map((src, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded overflow-hidden flex-shrink-0">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                  ;(e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center text-gray-400 text-xs text-center px-1">
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
