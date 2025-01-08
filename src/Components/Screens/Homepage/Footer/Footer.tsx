import { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span style={{ opacity: '.6' }}>
        © 2025&nbsp;
        <a href="https://montaanaq.netlify.app" className={styles.footer_span}>Montana</a>
        &nbsp;Powered by&nbsp;
        <a href="https://react.com" target="_blank" rel="noreferrer" className={styles.footer_span}>
          React
        </a>
      </span>
    </footer>
  )
}

export default Footer
