import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

type Theme = 'dark' | 'light'

type Coords = { x: number; y: number }

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: (coords?: Coords) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'app-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    defaultTheme ?? getInitialTheme
  )

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  const toggleTheme = useCallback(
    (coords?: Coords) => {
      const newTheme: Theme = theme === 'light' ? 'dark' : 'light'

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (!document.startViewTransition || prefersReducedMotion) {
        setTheme(newTheme)
        return
      }

      const root = document.documentElement
      if (coords) {
        root.style.setProperty('--vt-x', `${coords.x}px`)
        root.style.setProperty('--vt-y', `${coords.y}px`)
      } else {
        root.style.setProperty('--vt-x', '50vw')
        root.style.setProperty('--vt-y', '50vh')
      }

      root.setAttribute('data-theme-transitioning', newTheme)

      const transition = document.startViewTransition(() => {
        setTheme(newTheme)
      })

      transition.finished.finally(() => {
        root.removeAttribute('data-theme-transitioning')
      })
    },
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a <ThemeProvider>')
  }
  return context
}
