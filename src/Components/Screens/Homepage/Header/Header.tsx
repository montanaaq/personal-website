import LightModeToggle from './LightModeToggle.js'
import LanguageToggle from './LanguageToggle'
import { Link } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { useLanguage } from '../../../../hooks/useLanguage.js'
import { motion } from 'motion/react'
import styles from './Header.module.css'

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
      <h1 style={{ opacity: 0 }}>Hidden</h1>
      <div className={styles.wrapper}>
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <motion.h4
            className={styles.name}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
              color: 'var(--secondary)'
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
              delay: 0.2,
              duration: 0.6
            }}
          >
            {t.header.name}
          </motion.h4>
        </Link>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <LightModeToggle />
        </motion.div>
      </div>
      <div className={styles.right_wrapper}>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <LanguageToggle />
        </motion.div>
      </div>
      <h1 style={{ opacity: 0 }}>Hidden</h1>
    </header>
  )
}

export default Header
