import { motion as m } from 'motion/react'
import { useLanguage } from '../../../hooks/useLanguage'
import { useAuthorList } from '../../../data/Music/AuthorListLocalized'
import { useMusicList } from '../../../data/Music/MusicListLocalized'
import Footer from '../Homepage/Footer/Footer'
import AuthorCard from './AuthorCard'
import Card from './Card'
import styles from './MusicPage.module.css'

const ViewPage = () => {
  const { t } = useLanguage()
  const MusicList = useMusicList()
  const AuthorList = useAuthorList()

  return (
    <>
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
                style={{
                  display: 'flex',
                  gap: '10px'
                }}
              >
                {t.music.title}{' '}
                <span style={{ color: 'var(--secondary)' }}>
                  {t.music.titleHighlight}
                </span>
              </h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
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
              {t.music.albums}
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
