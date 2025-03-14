import { motion as m, useScroll, useSpring } from 'motion/react'
import AuthorList from '../../../data/Music/AuthorList'
import { MusicList } from '../../../data/Music/MusicList'
import Footer from '../Homepage/Footer/Footer'
import Header from '../Homepage/Header/Header'
import AuthorCard from './AuthorCard'
import Card from './Card'
import styles from './MusicPage.module.css'

const ViewPage = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <m.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className={styles.center}>
        <m.div
          className={styles.main_post}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.mp_wrapper}>
            <m.div
              className={styles.header_container}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1
                dangerouslySetInnerHTML={{
                  __html: 'Моя <p style="color: var(--secondary)"> музыка</p>'
                }}
                style={{
                  display: 'flex',
                  gap: '10px'
                }}
              ></h1>
              <img
                src="https://static-00.iconduck.com/assets.00/spotify-icon-2048x2048-5gqpkwih.png"
                alt="spotify_ico"
              />
            </m.div>

            {/* Animate Authors */}
            <m.div
              className={styles.author_container}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {AuthorList.map((el, index) => (
                <m.div
                  key={el.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <AuthorCard
                    id={el.id}
                    name={el.name}
                    img={el.img}
                    info={el.info}
                    link={el.link}
                    alt={el.alt}
                  />
                </m.div>
              ))}
            </m.div>

            <m.h1
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px'
              }}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Альбомы
            </m.h1>

            {/* Animate Albums */}
            <m.div className={styles.music_container}>
              {MusicList.map((el, index) => (
                <m.div
                  className={styles.card_wrapper}
                  key={el.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.01 }}
                  viewport={{ once: true }}
                >
                  <Card
                    id={el.id}
                    name={el.name}
                    img={el.img}
                    best={el.best}
                    alt={el.alt}
                    link={el.link}
                    duration={el.duration}
                  />
                </m.div>
              ))}
            </m.div>
          </div>
        </m.div>
      </div>
      <Footer />
    </>
  )
}

export default ViewPage
