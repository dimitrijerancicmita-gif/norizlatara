import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Pri promeni stranice vrati prikaz na vrh.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
