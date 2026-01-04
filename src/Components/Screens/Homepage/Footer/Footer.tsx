import type { FC } from 'react'

import { useLocation } from 'react-router'

import styles from './Footer.module.css'

const Footer: FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const footerClass = isHomePage
    ? styles.footer
    : `${styles.footer} ${styles.fixed}`

  const year = new Date().getFullYear()

  return (
    <footer className={footerClass}>
      <span style={{ opacity: '.6' }}>
        © {year}
        <a href="https://montaanaq.netlify.app" className={styles.footer_span}>
          Montana
        </a>
        &nbsp;Powered by
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className={styles.footer_span}
        >
          React
        </a>
      </span>
    </footer>
  )
}

export default Footer
