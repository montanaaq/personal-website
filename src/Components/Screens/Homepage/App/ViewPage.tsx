import { motion as m } from 'motion/react'
import { type FC, useState } from 'react'
import { useLanguage } from '../../../../hooks/useLanguage'

import Footer from '../Footer/Footer'
import styles from './App.module.css'
import BlurText from './BlurText/BlurText'

const ViewPage: FC = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false)
  const [showThirdMessage, setShowThirdMessage] = useState(false)
  const { t } = useLanguage()

  return (
    <m.div
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <m.div className={styles.info_container}>
        <BlurText
          text={t.homepage.welcome}
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => setShowSecondMessage(true)}
          className={styles.blurred_text}
        />

        {showSecondMessage && (
          <BlurText
            text={t.homepage.projects}
            delay={150}
            animateBy="words"
            direction="top"
            linkWord={t.homepage.projectsWord}
            linkTo="/info"
            onAnimationComplete={() => setShowThirdMessage(true)}
            className={styles.blurred_text}
          />
        )}

        {showThirdMessage && (
          <BlurText
            text={t.homepage.links}
            delay={150}
            animateBy="words"
            direction="bottom"
            links={[
              { word: t.homepage.linksWords[0], url: 'https://t.me/montaanaq' },
              {
                word: t.homepage.linksWords[1],
                url: 'mailto:amirnurislamov123@gmail.com'
              }
            ]}
            className={styles.blurred_text}
          />
        )}
      </m.div>

      <Footer />
    </m.div>
  )
}

export default ViewPage
