import { motion as m } from 'motion/react'
import type { FC } from 'react'
import { Link } from 'react-router'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './NotFoundPage.module.css'

const NotFoundPage: FC = () => {
  const { t } = useLanguage()
  return (
    <m.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <m.div
        className={styles.content}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className={styles.error_code}>{t.notFound.errorCode}</h1>
        <h2 className={styles.error_message}>{t.notFound.title}</h2>
        <p className={styles.description}>{t.notFound.description}</p>
        <Link to="/" className={styles.home_link}>
          {t.notFound.homeButton}
        </Link>
      </m.div>
    </m.div>
  )
}

export default NotFoundPage
