/**
 * Loads all images from src/photos/ and provides ordering (saved in localStorage).
 * Add or remove files in src/photos/; order is persisted when you drag to reorder.
 */

const STORAGE_KEY = 'personal-website-photo-order'

// Vite bundles assets from src/photos; we get their URLs. Paths are relative to this file.
const glob = import.meta.glob('./photos/*', { query: '?url', import: 'default', eager: true }) as Record<string, string>

// Only include formats browsers can display. Explicitly exclude HEIC so it never appears.
const DISPLAYABLE_EXT = /\.(jpg|jpeg|png|gif|webp)$/i
const isDisplayable = (path: string) => DISPLAYABLE_EXT.test(path) && !path.toLowerCase().endsWith('.heic')

/** All photos from src/photos (displayable formats only), in stable alphabetical order by path. */
export const allPhotoEntries: { path: string; url: string }[] = Object.entries(glob)
  .filter(([path]) => isDisplayable(path))
  .map(([path, url]) => ({ path, url }))
  .sort((a, b) => a.path.localeCompare(b.path))

/**
 * Returns photos in the order the user last saved (localStorage), or default order.
 * New photos not in saved order are appended.
 */
export function getOrderedPhotos(): { path: string; url: string }[] {
  const pathSet = new Set(allPhotoEntries.map((e) => e.path))
  let order: string[] = []
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (raw) order = JSON.parse(raw)
  } catch {
    order = []
  }
  const orderedPaths = order.filter((p) => pathSet.has(p))
  const newPaths = allPhotoEntries.filter((e) => !order.includes(e.path)).map((e) => e.path)
  const fullOrder = [...orderedPaths, ...newPaths]
  return fullOrder
    .map((path) => allPhotoEntries.find((e) => e.path === path))
    .filter((e): e is { path: string; url: string } => e != null)
}

/** Saves the current order (array of paths) so it persists across reloads. */
export function savePhotoOrder(paths: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(paths))
  } catch {
    // ignore quota or private mode
  }
}
