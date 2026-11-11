import { createContext, useContext, useMemo, useState } from 'react'
import site from '../data/site.js'

const SiteContext = createContext(null)

// Čuva podatke o firmi i stanje mobilnog menija.
export function SiteProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const value = useMemo(() => ({ site, menuOpen, setMenuOpen }), [menuOpen])
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite mora da se koristi unutar SiteProvider-a')
  return ctx
}
