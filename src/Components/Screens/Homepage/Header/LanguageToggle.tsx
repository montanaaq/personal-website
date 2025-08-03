import { FC } from 'react'
import { motion } from 'motion/react'
import { useLanguage } from '../../../../contexts/LanguageContext'
import styles from './Header.module.css'

const LanguageToggle: FC = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className={styles.language_toggle}
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transition: { type: 'spring', stiffness: 300, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {language === 'ru' ? 'EN' : 'RU'}
    </motion.button>
  )
}

export default LanguageToggle
