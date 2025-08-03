import { motion as m } from 'motion/react'
import { FC } from 'react'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import { useLanguage } from '../../../../contexts/LanguageContext'
import Buttons from '../Buttons.tsx'
import Footer from '../Footer/Footer.tsx'
import SocialLinks from '../SocialLinks.tsx'
import styles from './App.module.css'

const ViewPage: FC = () => {
  const { t } = useLanguage()

  return (
    <>
      <m.div
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Контейнер с инфо */}
        <m.div
          className={styles.info_container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Фото с анимацией появления */}
          <m.img
            src="./avatar.jpg"
            alt="out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.image}
          />

          {/* Блок с текстом */}
          <m.div
            className={styles.namespace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <m.p
              style={{ letterSpacing: '1.1px', fontWeight: 500 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t.homepage.greeting}{' '}
              <span>
                <Typewriter
                  options={{
                    deleteSpeed: 'natural',
                    autoStart: true,
                    delay: 140
                  }}
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter
                      .typeString(t.homepage.name)
                      .pauseFor(700)
                      .deleteAll()
                      .typeString(t.homepage.role)
                      .pauseFor(700)
                      .deleteAll()
                      .typeString(t.homepage.name)
                      .start()
                  }}
                />
              </span>
            </m.p>

            {/* Move these outside of <p> */}
            <SocialLinks />
          </m.div>

          <div style={{ paddingTop: '15px' }}></div>
          <Buttons />
        </m.div>

        <Footer />
      </m.div>
    </>
  )
}

export default ViewPage
