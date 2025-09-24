import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import styles from './Homepage.module.css'

const Buttons: FC = () => {
  const { t } = useLanguage()

  return (
    <div className={styles.button_wrapper}>
      <Link to="/info">
        <Button variant="contained" size="small">
          {t.buttons.projects}
        </Button>
      </Link>
      <Link to="/ide">
        <Button variant="contained" size="small">
          {t.buttons.ide}
        </Button>
      </Link>
      <Link to="/music">
        <Button size="small" variant="contained">
          {t.buttons.music}
        </Button>
      </Link>
    </div>
  )
}

export default Buttons
