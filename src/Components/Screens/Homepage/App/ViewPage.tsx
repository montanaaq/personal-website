import { motion } from 'framer-motion'
import { FC } from 'react'
import Typewriter from 'typewriter-effect'
import Buttons from '../Buttons.tsx'
import Footer from '../Footer/Footer.tsx'
import Header from '../Header/Header.tsx'
import SocialLinks from '../SocialLinks.tsx'
import styles from './App.module.css'

const ViewPage: FC = () => {
  return (
    <>
      <Header />
      <motion.div
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Контейнер с инфо */}
        <motion.div
          className={styles.info_container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Фото с анимацией появления */}
          <motion.img
            src="./avatar.jpg"
            alt="out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={styles.image}
          />

          {/* Блок с текстом */}
          <motion.div
            className={styles.namespace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <p>
              Hi! I'm{' '}
              <span>
                <Typewriter
                  options={{
                    deleteSpeed: 'natural',
                    autoStart: true,
                    cursor: '_',
                    delay: 180
                  }}
                  onInit={typewriter => {
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
            <SocialLinks />
            <div style={{ paddingTop: '15px' }}></div>
            <Buttons />
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  )
}

export default ViewPage
