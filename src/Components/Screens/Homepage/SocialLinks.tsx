import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { FC } from 'react'
import styles from './Homepage.module.css'

const SocialLinks: FC = () => {
  return (
    <div className={styles.social_links}>
      <a
        href="https://github.com/montanaaq"
        target="_blank"
        rel="noreferrer"
        className="fa-github"
      >
        <GitHubIcon
          fontSize="medium"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'var(--text-color)'
          }}
        />
        <p className={styles.link_text}>GitHub</p>
      </a>
      <a
        href="https://t.me/montaanaq"
        target="_blank"
        rel="noreferrer"
        className="fa-telegram"
      >
        <TelegramIcon
          fontSize="medium"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'var(--text-color)'
          }}
        />
        <p className={styles.link_text}>Telegram</p>
      </a>
      <a
        href="https://leetcode.com/u/montanaaq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
            fill="#ffffff"
          ></path>
          <path
            d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
            fill="#ffffff"
          ></path>
        </svg>

        <p className={styles.link_text}>LeetCode</p>
      </a>
    </div>
  )
}

export default SocialLinks
