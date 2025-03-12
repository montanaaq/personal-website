import { motion as m } from 'framer-motion'
import { FC } from 'react'
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import Buttons from '../Buttons.tsx'
import Footer from '../Footer/Footer.tsx'
import Header from '../Header/Header.tsx'
import SocialLinks from '../SocialLinks.tsx'
import styles from './App.module.css'

const ViewPage: FC = () => {
  return (
    <>
      <Header />
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
            transition={{ duration: 1 }}
            className={styles.image}
          />

          {/* Блок с текстом */}
          <m.div
            className={styles.namespace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <p style={{letterSpacing: '1.2px'}}>
              Hi! I'm{' '}
              <span>
                <Typewriter
                  options={{
                    deleteSpeed: 'natural',
                    autoStart: true,
                    cursor: '_',
                    delay: 180
                  }}
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter
                      .typeString('Montana')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Python, Frontend Developer')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Montana')
                      .start()
                  }}
                />
              </span>
            </p>

            {/* Move these outside of <p> */}
            <SocialLinks />
            <div style={{ paddingTop: '15px' }}></div>
            <Buttons />
          </m.div>
        </m.div>
      </m.div>
      <Footer />
    </>
  )
}

export default ViewPage
