import { useEffect, useState } from 'react'

const useIsChristmas = (): boolean => {
  const [isChristmas, setIsChristmas] = useState(false)

  useEffect(() => {
    const checkChristmasPeriod = () => {
      const now = new Date()
      const month = now.getMonth()
      const day = now.getDate()

      // December (month = 11) from day 1 onwards OR January (month = 0) day 1
      const isInPeriod =
        (month === 11 && day >= 1) || (month === 0 && day === 1)

      setIsChristmas(isInPeriod)
    }

    checkChristmasPeriod()

    // Check every day at midnight
    const now = new Date()
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )
    const msUntilMidnight = tomorrow.getTime() - now.getTime()

    const timeout = setTimeout(() => {
      checkChristmasPeriod()
      // Then check every 24 hours
      const interval = setInterval(checkChristmasPeriod, 24 * 60 * 60 * 1000)
      return () => clearInterval(interval)
    }, msUntilMidnight)

    return () => clearTimeout(timeout)
  }, [])

  return isChristmas
}

export default useIsChristmas
