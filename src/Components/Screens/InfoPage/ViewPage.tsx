import { motion, useScroll, useSpring } from 'framer-motion'
import { FC } from 'react'
import { ProjectsList } from '../../../data/Projects/ProjectsList'
import Footer from '../Homepage/Footer/Footer'
import Header from '../Homepage/Header/Header'
import styles from './Info.module.css'

const ViewPage: FC = () => {
  const today = new Date()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today)

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className={styles.main_post}>
        <header style={{ margin: '20px 0px 40px 0px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: 600 }}>
            Мои <span style={{ color: 'var(--secondary)' }}>проекты</span>
          </h1>
          <div>
            <span>{formattedDate}</span>
          </div>
        </header>
        <div className={styles.post_content}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px' }}>
            Содержание
          </h2>
          <ul
            style={{
              textAlign: 'left',
              marginLeft: '20px',
              marginBottom: '35px'
            }}
          >
            {ProjectsList.map(el => (
              <li style={{ marginBottom: '15px' }} key={el.id}>
                <a
                  href={`#${el.url}`}
                  style={{
                    color: 'var(--text-color)',
                    textDecorationThickness: '1px'
                  }}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          {ProjectsList.map(el => (
            <div className={styles.container} key={el.id}>
              <h2 style={{ marginBottom: '20px' }} id={el.url}>
                {el.main_name} ({el.date})
              </h2>
              <p style={{ marginBottom: '10px' }}>{el.p}</p>
              <p className={styles.status}>
                Статус:{' '}
                {el.isSupport ? (
                  <span className={styles.support}>Поддерживается</span>
                ) : (
                  <span className={styles.not_support}>Не поддерживается</span>
                )}
              </p>
              {el.link && (
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={el.link}
                    style={{
                      color: 'var(--text-color)',
                      marginBottom: '10px'
                    }}
                  >
                    Ссылка
                  </a>
                </div>
              )}
              {el.source_code ? (
                <div>
                  <a
                    href={el.source_code}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--text-color)'
                    }}
                  >
                    Source code
                  </a>
                </div>
              ) : (
                ''
              )}
              <img
                src={el.img}
                alt="not downloaded"
                className={
                  el.url === 'sneaknews'
                    ? `${styles.sneaknews_img}`
                    : el.url === 'uni_finder_website'
                    ? `${styles.uni_finder_website_img}`
                    : el.url === 'my_website'
                    ? `${styles.profile_website_img}`
                    : el.url === 'schedulebot'
                    ? `${styles.schedulebot_img}`
                    : el.url === 'desks_duels'
                    ? `${styles.desks_duels_img}`
                    : ''
                }
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewPage
