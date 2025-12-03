import { Button } from '@mui/material'
import type { FC } from 'react'
import styles from './MusicPage.module.css'

type AuthorCardProps = {
  id: number
  name: string
  img: string
  info: string
  link: string
  alt: string
}

const AuthorCard: FC<AuthorCardProps> = ({
  id,
  name,
  img,
  info,
  link,
  alt
}) => {
  return (
    <div className={styles.author_card}>
      <img
        key={`img_${id}`}
        src={img}
        alt={alt}
        className={styles.author_img}
      />
      <div>
        <h3 key={`author_${id}`} className={styles.author_name}>
          {name}
        </h3>
        <p key={`info_${id}`} className={styles.author_info}>
          {info}
        </p>
        <Button
          variant="outlined"
          size="large"
          href={link}
          target="_blank"
          key={`link_${id}`}
        >
          Перейти
        </Button>
      </div>
    </div>
  )
}

export default AuthorCard
