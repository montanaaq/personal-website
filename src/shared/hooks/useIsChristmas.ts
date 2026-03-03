import { useEffect, useState } from 'react'

const allowedMonths = [11, 0, 1]

const useIsChristmas = (): boolean => {
  const [isChristmas, setIsChristmas] = useState(false)

  useEffect(() => {
    const checkChristmasPeriod = () => {
      const now = new Date()
      const month = now.getMonth()

      const isInPeriod = allowedMonths.includes(month)

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
