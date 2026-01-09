import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { m } from 'motion/react'
import { type FC, useState } from 'react'
import { toast } from 'sonner'

import { useLanguage } from '../../../../hooks/useLanguage'

import styles from './Header.module.css'

const LightModeToggle: FC = () => {
  const [lightMode, setLightMode] = useState(false)
  const { t } = useLanguage()

  const toggleLightMode = () => {
    const isLightMode =
      document.documentElement.getAttribute('data-theme') === 'light'
    document.documentElement.setAttribute(
      'data-theme',
      isLightMode ? 'dark' : 'light'
    )
    setLightMode(!lightMode)

    if (!lightMode) {
      toast.info(t.theme.lightActivated)
    } else {
      toast.info(t.theme.darkActivated)
    }
  }

  return (
    <div>
      <m.button
        onClick={toggleLightMode}
        className={styles.toggle_light_mode}
        whileHover={{
          scale: 1.1,
          rotate: 180,
          transition: { type: 'spring', stiffness: 300, damping: 10 }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        aria-label={lightMode ? t.theme.darkActivated : t.theme.lightActivated}
        title={lightMode ? t.theme.darkActivated : t.theme.lightActivated}
      >
        {!lightMode ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </m.button>
    </div>
  )
}

export default LightModeToggle
