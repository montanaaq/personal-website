import { motion, useScroll, useSpring } from 'framer-motion'
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
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className={styles.center}>
        <div className={styles.main_post}>
          <div className={styles.mp_wrapper}>
            <div className={styles.header_container}>
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
            </div>
            <div className={styles.author_container}>
              {AuthorList.map(el => (
                <AuthorCard
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  img={el.img}
                  info={el.info}
                  link={el.link}
                  alt={el.alt}
                />
              ))}
            </div>
            <h1
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px'
              }}
            >
              Альбомы
            </h1>
            <div className={styles.music_container}>
              {MusicList.map(el => (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  img={el.img}
                  best={el.best}
                  alt={el.alt}
                  link={el.link}
                  duration={el.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewPage
