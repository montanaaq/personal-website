import { type FC, useEffect, useState } from 'react'
import { Link } from 'react-router'

import { useLanguage } from '../../hooks/useLanguage.js'

import styles from './Header.module.css'
import LanguageToggle from './LanguageToggle.js'
import LightModeToggle from './LightModeToggle.js'

const Header: FC = () => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrapper}>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: 'none'
            }}
          >
            <h4 className={styles.name}>{t.header.name}</h4>
          </Link>
          <div>
            <LightModeToggle />
          </div>
        </div>
        <div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
