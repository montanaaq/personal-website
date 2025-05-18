import { motion as m } from 'motion/react'
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
              Hi! I'm{' '}
              <span>
                <Typewriter
                  options={{
                    deleteSpeed: 'natural',
                    autoStart: true,
                    delay: 140
                  }}
                  onInit={(typewriter: TypewriterClass) => {
                    typewriter
                      .typeString('Amir aka Montana')
                      .pauseFor(700)
                      .deleteAll()
                      .typeString('Fullstack Developer')
                      .pauseFor(700)
                      .deleteAll()
                      .typeString('Amir aka Montana')
                      .start()
                  }}
                />
              </span>
            </m.p>

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
