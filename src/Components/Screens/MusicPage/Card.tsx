import { Button } from '@mui/material'
import { FC } from 'react'
import styles from './MusicPage.module.css'

interface ICard {
  id: number
  name: string
  img: string
  best: string
  alt: string
  link: string
  duration: string
}

const Card: FC<ICard> = ({ id, name, img, best, alt, link, duration }) => {
  return (
    <div className={styles.card} key={`card_${id}`}>
      <div key={`img_${id}`}>
        <img src={img} alt={alt} key={`img_new_${id}`} />
      </div>
      <h2
        className={name == "Primus - They Can't All Be Zingers" ? 'small' : ''}
        key={`name_${id}`}
      >
        {name}
      </h2>
      <p key={`duration_${id}`}>
        Длительность: <b>{duration}</b>
      </p>
      <p key={`best_${id}`}>
        Любимые: <b>{best}</b>
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
  )
}

export default Card
