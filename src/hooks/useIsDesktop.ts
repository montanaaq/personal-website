import { useState, useEffect } from 'react'

function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= breakpoint
  })

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= breakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isDesktop
}

export default useIsDesktop
